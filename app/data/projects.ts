export type Project = {
  slug: string;
  title: string;
  category: string;
  source: string;
  description: string;
  contribution?: string[];
  stack: string[];
  image?: string;
  liveUrl?: string;
  technicalHighlights?: string;
  group: "featured" | "agency" | "other" | "archive";
};

export const projects: Project[] = [
  {
    slug: "karabook", title: "Karabook", category: "Property discovery & booking platform",
    source: "karabook.in", group: "featured", liveUrl: "https://karabook.in",
    image: "/images/mockups/karabookmockup.png",
    description: "A property booking platform built around three experiences: travellers exploring properties, owners managing listings, and admins reviewing and managing properties.",
    contribution: [
      "Built property listing and discovery interfaces.",
      "Implemented traveller, owner and admin dashboards.",
      "Handled booking flows and availability-related UI.",
      "Ensured responsive layouts across the platform.",
    ],
    stack: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    technicalHighlights: "Multi-role application, API integration, booking states, and dashboard workflows.",
  },
  {
    slug: "woodan", title: "Woodan", category: "Ecommerce platform", source: "woodan.in",
    group: "featured", liveUrl: "https://woodan.in", image: "/images/mockups/woodanmockup.png",
    description: "An ecommerce website for wooden gifts, with a customer-facing storefront and a custom admin dashboard.",
    contribution: [
      "Built product browsing and detail pages.",
      "Implemented shopping and order-related flows.",
      "Created admin interfaces for products and orders.",
      "Integrated the storefront with backend services.",
    ],
    stack: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS"],
    technicalHighlights: "Product and order data, API-connected interfaces, and customer/admin workflows.",
  },
  {
    slug: "advolve", title: "Advolve Website", category: "Agency website", source: "Advolve",
    group: "agency",
    description: "Implemented responsive sections, reusable components and motion details to bring the agency's visual direction to life.",
    stack: ["Next.js", "React", "Tailwind CSS", "GSAP"],
  },
  {
    slug: "villa-gulposh", title: "Villa Gulposh Booking System", category: "Booking application",
    source: "Advolve", group: "agency",
    description: "Worked on the booking website and user/admin dashboards, connecting interface flows with application functionality.",
    stack: ["Next.js", "React", "Node.js", "MongoDB"],
  },
  {
    slug: "ecoclay", title: "EcoClay Solutions", category: "Business website", source: "WordPress",
    group: "other", image: "/images/mockups/ecocalysolutionmockup.png",
    description: "Designed and developed a company website to showcase products, services and business information.",
    stack: ["WordPress"],
    contribution: ["Company profile", "Product showcase", "Business information"],
  },
  {
    slug: "komal-enterprises", title: "Komal Enterprises", category: "Company website", source: "WordPress",
    group: "other",
    description: "Built a professional company website with a clear structure and easy navigation.",
    stack: ["WordPress"],
  },
  {
    slug: "synergeze", title: "Synergeze", category: "Business website", source: "WordPress",
    group: "archive", image: "/images/mockups/synergezemockup.png",
    description: "A modern business website showcasing company services, industries and solutions with a clean and professional design.",
    contribution: ["Company services", "Industry solutions", "Business information"], stack: ["WordPress"],
  },
];
