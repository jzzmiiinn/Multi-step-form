import type { Plan } from "../types/plan";

export const plans: Plan[] = [
  {
    id: "arcade",
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: "/icon-arcade.svg",
  },
  {
    id: "advanced",
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: "/icon-advanced.svg",
  },
  {
    id: "pro",
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: "/icon-pro.svg",
  },
];
