import type { Plan } from "../types/plan";

export interface SelectPlanProps {
  plans: Plan[];
}

export const SelectPlan = ({ plans }: SelectPlanProps) => {
  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-950">Select your Plan</h1>

      <p className="mt-3 text-gray-500">
        You have the option of monthly or yearly billing.{" "}
      </p>

      <form className="mt-8 space-y-5">
        {plans.map((plan) => (
          <div key={plan.id} className="rounded-lg border p-4">
            <img src={plan.icon} alt="" className="size-10" />

            <h2 className="font-bold text-blue-950">{plan.name}</h2>

            <p className="text-gray-500">${plan.monthlyPrice}/mo</p>
          </div>
        ))}
      </form>
    </section>
  );
};
