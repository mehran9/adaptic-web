import { SubscriptionPlan } from "types"
import { env } from "@/env.mjs"

export const pricingData: SubscriptionPlan[] = [
  {
    "title": "Free Starter",
    "description": "Explore foundational generative design features with no cost.",
    "benefits": [
      "Basic design token manager",
      "1 design system (non-commercial)",
      "2 AI-generated projects (no code editor)",
      "Hosted dynamic documentation site",
      "View-only user management access"
    ],
    "limitations": [
      "Limited AI credits (to give you a little taste!)",
      "No output publishing",
      "Non-commercial use only",
      "No Git version control",
      "No custom domains for documentation"
    ],
    "prices": {
      "monthly": 0,
      "yearly": 0
    },
    "stripeIds": {
      "monthly": "env.NEXT_PUBLIC_STRIPE_FREE_MONTHLY_PLAN_ID",
      "yearly": "env.NEXT_PUBLIC_STRIPE_FREE_YEARLY_PLAN_ID"
    }
  },
  {
    "title": "Pro",
    "description": "Ideal for solo designers and developers requiring full design control.",
    "benefits": [
      "1 generated design system",
      "3 AI-generated projects",
      "50 AI credits per month",
      "Design token manager",
      "Dynamic documentation and hosting",
      "NPM, GitHub, CDN distribution",
      "Git version control and GitHub CI/CD"
    ],
    "limitations": [
      "No SSO or advanced security",
      "No custom branding for documentation"
    ],
    "prices": {
      "monthly": 59,
      "yearly": 566.40
    },
    "stripeIds": {
      "monthly": "env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID",
      "yearly": "env.NEXT_PUBLIC_STRIPE_PRO_YEARLY_PLAN_ID"
    }
  },
  {
    "title": "Startup Team",
    "description": "Advanced design tools for startups focused on growth and collaboration.",
    "benefits": [
      "1 generated design system",
      "10 AI-generated projects",
      "200 AI credits per month",
      "Design token manager",
      "Dynamic documentation and hosting",
      "NPM, GitHub, CDN distribution",
      "Git version control, GitHub CI/CD",
      "5 contributor seats, unlimited viewers"
    ],
    "limitations": [
      "No SSO or advanced security",
      "No custom branding for documentation"
    ],
    "prices": {
      "monthly": 599,
      "yearly": 5750.40,
      "additionalSeatsMonthly": 59,
      "additionalSeatsYearly": 566.40
    },
    "stripeIds": {
      "monthly": "env.NEXT_PUBLIC_STRIPE_STARTUP_MONTHLY_PLAN_ID",
      "yearly": "env.NEXT_PUBLIC_STRIPE_STARTUP_YEARLY_PLAN_ID"
    }
  },
  {
    "title": "Enterprise Team",
    "description": "Comprehensive solutions for large enterprises scaling multiple teams.",
    "benefits": [
      "3 generated design systems",
      "30 AI-generated projects",
      "1000 AI credits per month",
      "API integration in projects",
      "Git version control, GitHub CI/CD",
      "Custom domains and branding",
      "SSO, advanced security",
      "15 contributor seats, unlimited viewers"
    ],
    "limitations": [],
    "prices": {
      "monthly": 1799,
      "yearly": 17270.40,
      "additionalSeatsMonthly": 79,
      "additionalSeatsYearly": 758.40
    },
    "stripeIds": {
      "monthly": "env.NEXT_PUBLIC_STRIPE_ENTERPRISE_MONTHLY_PLAN_ID",
      "yearly": "env.NEXT_PUBLIC_STRIPE_ENTERPRISE_YEARLY_PLAN_ID"
    }
  }
]

