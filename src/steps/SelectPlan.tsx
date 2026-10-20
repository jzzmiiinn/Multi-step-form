import { useState } from "react";
import type { Plan } from "../types/plan";

interface SelectPlanProps {
  plans: Plan[];
  billingCycle: "monthly" | "yearly";
  setBillingCycle: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
  selectedPlan: string;
  setSelectedPlan: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectPlan = ({
  plans,
  billingCycle,
  setBillingCycle,
  selectedPlan,
  setSelectedPlan,
}: SelectPlanProps) => {
  const isYearly = billingCycle === "yearly";

  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-950">Select your plan</h1>

      <p className="mt-3 text-gray-500">
        You have the option of monthly or yearly billing.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-lg border p-4 ${
              selectedPlan === plan.id
                ? "border-purple-700 bg-purple-50"
                : "border-gray-300"
            }`}
            onClick={() => setSelectedPlan(plan.id)}
          >
            <img src={plan.icon} alt="" className="size-10" />

            <h2 className="mt-8 font-bold text-blue-950">{plan.name}</h2>

            <p className="mt-1 text-sm text-gray-500">
              ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
              {isYearly ? "/yr" : "/mo"}
            </p>

            {isYearly && (
              <p className="mt-2 text-sm text-blue-950">2 months free</p>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-6 rounded-lg bg-blue-50 p-4">
        <span
          className={`text-sm font-bold ${
            !isYearly ? "text-blue-950" : "text-gray-500"
          }`}
        >
          Monthly
        </span>

        <button
          type="button"
          role="switch"
          aria-checked={isYearly}
          aria-label="Toggle yearly billing"
          onClick={() => setBillingCycle(isYearly ? "monthly" : "yearly")}
          className="flex h-6 w-12 items-center rounded-full bg-blue-950 p-1"
        >
          <span
            className={`size-4 rounded-full bg-white transition-transform ${
              isYearly ? "translate-x-6" : "translate-x-0"
            }`}
          />
        </button>

        <span
          className={`text-sm font-bold ${
            isYearly ? "text-blue-950" : "text-gray-500"
          }`}
        >
          Yearly
        </span>
      </div>
    </section>
  );
};
