import { plans } from "../data/plans";
import { addOns } from "../data/addOns";

interface SummaryProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  selectedPlan: string;
  billingCycle: "monthly" | "yearly";
  selectedAddons: string[];
}

export const Summary = ({
  currentStep,
  setCurrentStep,
  selectedPlan,
  billingCycle,
  selectedAddons,
}: SummaryProps) => {
  const isYearly = billingCycle === "yearly";

  const plan = plans.find((plan) => plan.id === selectedPlan);

  const chosenAddOns = addOns.filter((addOn) =>
    selectedAddons.includes(addOn.id),
  );

  const planPrice = plan
    ? isYearly
      ? plan.yearlyPrice
      : plan.monthlyPrice
    : 0;

  const addOnsTotal = chosenAddOns.reduce(
    (total, addOn) =>
      total + (isYearly ? addOn.yearlyPrice : addOn.monthlyPrice),
    0,
  );

  const total = planPrice + addOnsTotal;

  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-950">Finishing up</h1>

      <p className="mt-3 text-gray-500">
        Double check everything looks OK before confirming.
      </p>

      <div className="mt-8 rounded-lg bg-blue-50 p-5">
        <div className="flex items-center justify-between border-b border-gray-300 pb-4">
          <div>
            <h2 className="font-bold text-blue-950">
              {plan?.name} ({billingCycle})
            </h2>

            <button
              onClick={() => setCurrentStep(1)}
              type="button"
              className="text-sm text-gray-500 underline hover:text-purple-700"
            >
              Change
            </button>
          </div>

          <p className="font-bold text-blue-950">
            ${planPrice}/{isYearly ? "yr" : "mo"}
          </p>
        </div>

        <div className="space-y-4 pt-4">
          {chosenAddOns.length > 0 ? (
            chosenAddOns.map((addOn) => (
              <div
                key={addOn.id}
                className="flex items-center justify-between gap-4"
              >
                <p className="text-sm text-gray-500">{addOn.name}</p>

                <p className="text-sm text-blue-950">
                  +$
                  {isYearly ? addOn.yearlyPrice : addOn.monthlyPrice}/
                  {isYearly ? "yr" : "mo"}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No add-ons selected.</p>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between p-5">
        <p className="text-sm text-gray-500">
          Total (per {isYearly ? "year" : "month"})
        </p>

        <p className="text-xl font-bold text-purple-700">
          +${total}/{isYearly ? "yr" : "mo"}
        </p>
      </div>
    </section>
  );
};
