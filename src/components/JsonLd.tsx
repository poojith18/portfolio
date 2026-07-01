import { SITE_DESCRIPTION, SITE_NAME, SITE_URL, contact, socialLinks } from "@/data/site";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  url: SITE_URL,
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "SoFi",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of Utah",
    },
    {
      "@type": "CollegeOrUniversity",
      name: "IIT Bhubaneswar",
    },
  ],
  email: contact.email,
  telephone: contact.phone,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Utah",
    addressCountry: "US",
  },
  sameAs: socialLinks
    .filter((link) => link.name !== "Portfolio" && link.name !== "Resume")
    .map((link) => link.url),
  description: SITE_DESCRIPTION,
};

const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
  />
);

export default JsonLd;
