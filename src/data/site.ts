import type { NavLink, SocialLink } from "./types";

export const SITE_URL = "https://poojith18.github.io/portfolio/";
export const SITE_NAME = "Poojith Reddy Maligireddy";
export const SITE_TITLE = "Poojith Reddy Maligireddy — Software Engineer";
export const SITE_DESCRIPTION =
  "Software Engineer at SoFi building scalable backend services, AI/ML systems, and cloud infrastructure. MS in Computer Science from the University of Utah.";

export const profile = {
  /** Run `npm run optimize:assets` after adding a new photo. */
  webp: "profile.webp",
  jpg: "profile.jpg",
  alt: SITE_NAME,
  initials: "PR",
  width: 800,
  height: 800,
};

export const OG_IMAGE_URL = `${SITE_URL}og-image.png`;

export const navLinks: NavLink[] = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Projects", id: "work" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

export const sectionIds = ["hero", ...navLinks.map((link) => link.id)];

export const resumeUrl =
  "https://drive.google.com/file/d/1Z5PrTVI_OWIHeOB_D_q0TA7LT2_mCbRM/view";

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", url: "https://linkedin.com/in/poojith18" },
  { name: "GitHub", url: "https://github.com/poojith18" },
  { name: "Portfolio", url: SITE_URL },
  {
    name: "Resume",
    url: resumeUrl,
  },
];

export const contact = {
  email: "mpr10@iitbbs.ac.in",
  phone: "+1 (385) 371-6302",
  phoneHref: "tel:+13853716302",
  location: "Utah, USA",
};

export const availability = {
  status: "Open to opportunities",
  open: true,
};

export const techStack = [
  "Python",
  "AWS",
  "Kubernetes",
  "Temporal",
  "PostgreSQL",
  "Terraform",
  "PyTorch",
  "Langchain",
  "FastAPI",
  "Datadog",
  "Docker",
  "MLFlow",
];

export const aboutStats = [
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 3, suffix: "", label: "Companies" },
  { value: null, display: "MS", label: "Computer Science" },
  { value: 2, suffix: "", label: "Degrees" },
];
