import { FaAmazon, FaEbay } from "react-icons/fa";
import { SiWalmart, SiWebflow } from "react-icons/si";
import amazon from './../assets/optimized/HeroImgs/amazonHero.webp'
import walmat from './../assets/optimized/HeroImgs/WalmatHero.webp'
import ebay from "../assets/optimized/HeroImgs/ebayHero.webp";
import webimg from "../assets/optimized/HeroImgs/webHero.webp";

export const servicesData = [
  {
    id: 1,
    title: "Amazon FBM /Online/2 Step DS",
    desc: "We help sellers grow and optimize their Amazon presence with creative branding and product design.",
    icon: FaAmazon, 
    iconColor: "#FF9900",
    image: amazon,
    tagline: "Maximize your Amazon store’s growth and visibility.",
    features: [
      "Product Hunting",
      "Inventory Management ",
      "Orders fulfillment",
      "Account Health Management",
      "Customers Support",
    ],
    ctaText: "Get Amazon Service",
  },
  {
    id: 2,
    title: "eBay Drop Shipping ",
    desc: "Boost your eBay store with eye-catching designs and professional marketplace optimization.",
    icon: FaEbay,
    iconColor: "#0064D2",
    image:ebay,
    tagline: "Stand out and sell more on eBay.",
    features: [
      "Finding Profitable Products ",
      "Product Listing and Optimization ",
      "Account Health Management ",
      "Orders Management ",
      "Customer Service",
    ],
    ctaText: "Get eBay Service",
  },
  {
    id: 3,
    title: "Walmart FBM/WFS/Online Arbitrage",
    desc: "Expand your reach on Walmart Marketplace with expert product listings and strong brand identity.",
    icon: SiWalmart,
    iconColor: "#0071CE",
    image:
     walmat,
    tagline: "Grow your brand on Walmart Marketplace.",
    features: [
      "Finding Profitable Products from Retailers and Wholesalers ",
      "Product Listing and Optimization ",
      "Orders Management ",
      "Account Health Management ",
      "Customer Service",
    ],
    ctaText: "Get Walmart Service",
  },
  {
    id: 4,
    title: "Website Development",
    desc: "We create fast, responsive, and modern websites to elevate your brand and drive real growth.",
    icon: SiWebflow,
    iconColor: "#4353FF",
    image:webimg,
    tagline: "Build a stunning website that drives conversions.",
   features: [
  "Responsive Full-Stack Development",
  "SEO-Optimized Frontend & Backend Integration",
  "High-Performance Server-Side Rendering",
  "Robust Backend with API Development",
  "Custom Admin Panels for Management",
  "SEO-Friendly URL Structures & Metadata",
  "Ongoing Maintenance with SEO and Backend Updates",
],
    ctaText: "Start Website Project",
  },
];
