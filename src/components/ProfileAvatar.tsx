import { useState } from "react";
import { cn } from "@/lib/utils";
import { profile } from "@/data/site";

type ProfileAvatarSize = "md" | "lg";

interface ProfileAvatarProps {
  size?: ProfileAvatarSize;
  className?: string;
  priority?: boolean;
}

const sizeClasses: Record<ProfileAvatarSize, string> = {
  md: "w-44 h-44 md:w-52 md:h-52",
  lg: "w-48 h-48 lg:w-72 lg:h-72",
};

const ProfileAvatar = ({ size = "lg", className, priority = false }: ProfileAvatarProps) => {
  const [showFallback, setShowFallback] = useState(false);
  const base = import.meta.env.BASE_URL;
  const webpSrc = `${base}${profile.webp}`;
  const jpgSrc = `${base}${profile.jpg}`;

  return (
    <div
      className={cn(
        "relative shrink-0 rounded-2xl overflow-hidden border border-primary/20 bg-card",
        "shadow-[var(--shadow-card)] ring-1 ring-primary/10",
        sizeClasses[size],
        className,
      )}
    >
      {!showFallback ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={jpgSrc}
            alt={profile.alt}
            width={profile.width}
            height={profile.height}
            decoding="async"
            fetchPriority={priority ? "high" : "auto"}
            className="w-full h-full object-cover"
            onError={() => setShowFallback(true)}
          />
        </picture>
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{ background: "var(--gradient-card)" }}
          aria-hidden="true"
        >
          <span className="font-display text-5xl lg:text-7xl text-primary">{profile.initials}</span>
        </div>
      )}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
    </div>
  );
};

export default ProfileAvatar;
