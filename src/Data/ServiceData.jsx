import { FaAmazon, FaEbay } from "react-icons/fa";
import { SiWalmart, SiWebflow } from "react-icons/si";
import amazon from './../assets/Amazon_Banner.png'
import walmat from './../assets/walmat.jpg'
export const servicesData = [
  {
    id: 1,
    title: "Amazon Services",
    desc: "We help sellers grow and optimize their Amazon presence with creative branding and product design.",
    icon: FaAmazon, 
    iconColor: "#FF9900",
    image:
    amazon,
    tagline: "Maximize your Amazon store’s growth and visibility.",
    features: [
      "Storefront Design & Branding",
      "A+ Content & Enhanced Listings",
      "PPC Campaign Optimization",
      "SEO-driven Product Titles & Descriptions",
      "Competitor Analysis & Review Strategy",
    ],
    ctaText: "Get Amazon Service",
  },
  {
    id: 2,
    title: "eBay Services",
    desc: "Boost your eBay store with eye-catching designs and professional marketplace optimization.",
    icon: FaEbay,
    iconColor: "#0064D2",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
    tagline: "Stand out and sell more on eBay.",
    features: [
      "Custom Store Template Design",
      "Listing Optimization & SEO",
      "Product Photography Enhancement",
      "Competitor Insights",
      "Sales Growth Strategy",
    ],
    ctaText: "Get eBay Service",
  },
  {
    id: 3,
    title: "Walmart Services",
    desc: "Expand your reach on Walmart Marketplace with expert product listings and strong brand identity.",
    icon: SiWalmart,
    iconColor: "#0071CE",
    image:
     walmat,
    tagline: "Grow your brand on Walmart Marketplace.",
    features: [
      "Brand Store Setup",
      "High-Conversion Product Descriptions",
      "Walmart SEO Optimization",
      "Performance Reporting & Analytics",
      "Ongoing Store Management",
    ],
    ctaText: "Get Walmart Service",
  },
  {
    id: 4,
    title: "Website Development",
    desc: "We create fast, responsive, and modern websites to elevate your brand and drive real growth.",
    icon: SiWebflow,
    iconColor: "#4353FF",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80",
    tagline: "Build a stunning website that drives conversions.",
    features: [
      "Responsive Frontend Development",
      "SEO-Friendly Design",
      "Fast Loading Speed Optimization",
      "Modern UI/UX Design Principles",
      "Maintenance & Support",
    ],
    ctaText: "Start Website Project",
  },
];
