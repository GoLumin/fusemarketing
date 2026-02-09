export interface Feature {
  title: string;
  description: string;
}

export interface FeatureCategory {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: string;
  features: Feature[];
}

export const featureCategories: FeatureCategory[] = [
  {
    id: "conversion-tracking",
    eyebrow: "Core",
    title: "Signal-Based Conversion Tracking",
    description:
      "Feed real booking and revenue data back to ad platforms so the algorithm optimizes for actual customers.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />`,
    features: [
      {
        title: "Google Ads GCLID Capture",
        description:
          "Automatically capture Google Click IDs on every form submission for precise attribution.",
      },
      {
        title: "Automatic Conversion Events",
        description:
          "Fire conversion events to Google Ads when a lead is booked — no manual tagging needed.",
      },
      {
        title: "Custom Conversion Values",
        description:
          "Send actual quote and booking revenue as conversion values so Google can optimize for ROI.",
      },
      {
        title: "UTM Parameter Tracking",
        description:
          "Track source, medium, campaign, term, and content parameters across the full lead lifecycle.",
      },
      {
        title: "Revenue Attribution",
        description:
          "Attribute real revenue back to the ad, keyword, and campaign that generated it.",
      },
      {
        title: "Meta & More Coming Soon",
        description:
          "Google Ads is fully supported today. Meta Conversions API and additional platforms are on the roadmap.",
      },
    ],
  },
  {
    id: "lead-generation",
    eyebrow: "Capture",
    title: "Lead Generation",
    description:
      "Customizable forms and pipelines that capture, deduplicate, and track every lead from click to close.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />`,
    features: [
      {
        title: "Customizable Multi-Field Forms",
        description:
          "Build forms with any combination of text, dropdown, checkbox, and date fields.",
      },
      {
        title: "Custom Fields",
        description:
          "Add industry-specific fields to capture the exact data you need from every lead.",
      },
      {
        title: "Lead Deduplication",
        description:
          "Automatically detect and merge duplicate submissions so your pipeline stays clean.",
      },
      {
        title: "Status Pipeline",
        description:
          "Track leads through Pending → Contacted → Quoted → Booked with full audit history.",
      },
      {
        title: "Multi-Form Campaigns",
        description:
          "Create multiple forms with unique URLs for different campaigns, services, or landing pages.",
      },
    ],
  },
  {
    id: "quote-engine",
    eyebrow: "Convert",
    title: "Quote Engine",
    description:
      "Real-time dynamic pricing that turns visitors into qualified leads with instant, accurate quotes.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25v-.008zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007v-.008zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008v-.008zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />`,
    features: [
      {
        title: "Real-Time Dynamic Pricing",
        description:
          "Calculate quotes instantly based on service type, quantity, duration, and location.",
      },
      {
        title: "Mileage-Based Pricing",
        description:
          "Integrate with Google Maps to calculate delivery costs based on actual driving distance.",
      },
      {
        title: "Zone-Based Pricing",
        description:
          "Define service zones with custom pricing tiers for different geographic areas.",
      },
      {
        title: "Tiered Pricing",
        description:
          "Set up volume-based pricing tiers that automatically adjust as quantities change.",
      },
      {
        title: "Dynamic Discounts",
        description:
          "Apply discounts at multiple levels — per item, per order, or per customer segment.",
      },
      {
        title: "Configurable Fees",
        description:
          "Add delivery fees, setup fees, environmental fees, or any custom surcharge to quotes.",
      },
    ],
  },
  {
    id: "marketing-automation",
    eyebrow: "Automate",
    title: "Marketing Automation",
    description:
      "Trigger emails, SMS, and webhooks based on lead events and schedules — fully automated.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />`,
    features: [
      {
        title: "Smart Email Scheduling",
        description:
          "Schedule follow-up emails relative to lead creation, quote date, or booking date.",
      },
      {
        title: "State-Based Triggers",
        description:
          "Automatically fire actions when a lead moves through pipeline stages.",
      },
      {
        title: "SMS Notifications",
        description:
          "Send automated text messages via Twilio for instant lead engagement.",
      },
      {
        title: "Webhook Dispatching",
        description:
          "Push lead data to any external system with customizable webhook payloads.",
      },
    ],
  },
  {
    id: "multi-channel",
    eyebrow: "Communicate",
    title: "Multi-Channel Communication",
    description:
      "Reach leads via email, SMS, phone, and webhooks — all from a single platform.",
    icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />`,
    features: [
      {
        title: "Email Templates",
        description:
          "Design and send branded emails via Postmark with merge fields for personalization.",
      },
      {
        title: "SMS via Twilio",
        description:
          "Automated and manual SMS messaging with delivery tracking and opt-out handling.",
      },
      {
        title: "Phone Call Tracking & Recording",
        description:
          "Track inbound calls, record conversations, and attribute calls to campaigns.",
      },
      {
        title: "Outbound Webhooks",
        description:
          "Send lead data to CRMs, Slack, Zapier, or any system with custom payload mapping.",
      },
    ],
  },
];
