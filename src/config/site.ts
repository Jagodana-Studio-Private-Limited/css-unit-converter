export const siteConfig = {
  // ====== CUSTOMIZE THESE FOR EACH TOOL ======
  name: "CSS Unit Converter",
  title: "CSS Unit Converter - Convert px, rem, em, vh, vw, % in Real-Time",
  description: "Convert between CSS units instantly. Real-time conversion between px, rem, em, vh, vw, and percentages with adjustable base font size.",
  url: "https://css-unit-converter.tools.jagodana.com",
  ogImage: "/opengraph-image",

  // Header
  headerIcon: "Sigma", // lucide-react icon name
  // Brand gradient colors for Tailwind are in globals.css (--brand / --brand-accent)
  // Use text-brand, from-brand, to-brand-accent etc. in components
  brandAccentColor: "#8b5cf6", // purple accent for OG image gradient
  
  // SEO
  keywords: [
    "CSS unit converter",
    "px to rem",
    "CSS units",
    "em converter",
    "viewport units",
    "responsive design",
    "CSS developer tools",
  ],
  applicationCategory: "DeveloperApplication",

  // Theme
  themeColor: "#8b5cf6", // purple theme

  // Branding
  creator: "Jagodana",
  creatorUrl: "https://jagodana.com",
  twitterHandle: "@jagodana",

  // Social Profiles (for Organization schema sameAs)
  socialProfiles: [
    "https://twitter.com/jagodana",
  ],

  // Links
  links: {
    github: "https://github.com/Jagodana-Studio-Private-Limited/css-unit-converter",
    website: "https://jagodana.com",
  },

  // Footer
  footer: {
    about: "CSS Unit Converter helps developers instantly convert between different CSS units. Perfect for responsive design work, component building, and accessibility compliance.",
    featuresTitle: "Features",
    features: [
      "Real-time conversion between px, rem, em, vh, vw, %",
      "Adjustable base font size (default 16px)",
      "Copy-to-clipboard for quick use",
      "Mobile-friendly and fully responsive",
      "Works offline - no API required",
      "Dark mode support",
    ],
  },

  // Hero Section
  hero: {
    badge: "CSS Developer Tools",
    titleLine1: "CSS Unit",
    titleGradient: "Converter",
    subtitle: "Convert between px, rem, em, vh, vw, and % instantly. Adjust your base font size and get real-time conversions for responsive design.",
  },

  // Feature Cards (shown on homepage)
  featureCards: [
    {
      icon: "Zap",
      title: "Real-Time Conversion",
      description: "See conversions update instantly as you type. No delays, no API calls—pure frontend logic.",
    },
    {
      icon: "Copy",
      title: "Copy to Clipboard",
      description: "Copy any converted value with one click. Perfect for quick copy-paste into your CSS.",
    },
    {
      icon: "Smartphone",
      title: "Mobile Friendly",
      description: "Responsive design works seamlessly on phones, tablets, and desktops.",
    },
  ],

  // How-To Steps (for HowTo schema and FAQ)
  howToSteps: [
    {
      name: "Enter a CSS value",
      description: "Type a number in any CSS unit field (px, rem, em, etc.)",
    },
    {
      name: "Adjust base font size (optional)",
      description: "Change the base font size (default 16px) for accurate rem/em conversions",
    },
    {
      name: "View conversions",
      description: "See all equivalent values in other units instantly",
    },
    {
      name: "Copy to clipboard",
      description: "Click the copy button next to any value to copy it to your clipboard",
    },
  ],

  howToTotalTime: "PT1M", // 1 minute

  // FAQ Section
  faq: [
    {
      question: "What CSS units does this converter support?",
      answer: "This converter supports px (pixels), rem (relative to root font size), em (relative to element font size), vh (viewport height), vw (viewport width), and % (percentage).",
    },
    {
      question: "How is base font size used?",
      answer: "The base font size is used to calculate rem and em conversions. By default it's 16px (the standard browser default), but you can adjust it to match your project's root font size.",
    },
    {
      question: "Can I use this offline?",
      answer: "Yes! This tool works entirely in your browser with no API calls or internet connection required (after loading).",
    },
    {
      question: "What's the difference between rem and em?",
      answer: "rem (root em) is relative to the root element's font size, while em is relative to the current element's font size. This is why rem is often preferred for consistent, predictable sizing.",
    },
    {
      question: "How do viewport units (vh, vw) work?",
      answer: "vh and vw are relative to the browser viewport size. 100vh = 100% of viewport height, 100vw = 100% of viewport width. These are useful for full-screen designs.",
    },
  ],

  // Related tools (cross-links to other Jagodana tools)
  relatedTools: [
    { name: "JSON Path Finder", url: "https://json-path-finder.tools.jagodana.com" },
    { name: "HTTP Status Debugger", url: "https://http-status-debugger.tools.jagodana.com" },
  ],
};
