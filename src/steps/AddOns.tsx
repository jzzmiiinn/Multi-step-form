import { addOns } from "../data/addOns";

interface AddOnsProps {
  billingCycle: "monthly" | "yearly";
  selectedAddons: string[];
  setSelectedAddons: React.Dispatch<React.SetStateAction<string[]>>;
}

export const AddOns = ({
  billingCycle,
  selectedAddons,
  setSelectedAddons,
}: AddOnsProps) => {
  const isYearly = billingCycle === "yearly";

  return (
    <section>
      <h1 className="text-3xl font-bold text-blue-950">Pick add-ons</h1>

      <p className="mt-3 text-gray-500">
        Add-ons help enhance your gaming experience.
      </p>

      <form className="mt-8 space-y-5">
        {addOns.map((addOn) => {
          const isSelected = selectedAddons.includes(addOn.id);

          return (
            <label
              key={addOn.id}
              htmlFor={addOn.id}
              className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg border p-4 ${
                isSelected
                  ? "border-purple-700 bg-purple-50"
                  : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-4">
                <input
                  id={addOn.id}
                  name="addOns"
                  value={addOn.id}
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => {
                    setSelectedAddons((previous) =>
                      previous.includes(addOn.id)
                        ? previous.filter((id) => id !== addOn.id)
                        : [...previous, addOn.id],
                    );
                  }}
                  className="size-4 accent-purple-700"
                />

                <div>
                  <h2 className="font-bold text-blue-950">{addOn.name}</h2>
                  <p className="text-sm text-gray-500">{addOn.description}</p>
                </div>
              </div>

              <p className="whitespace-nowrap text-sm text-purple-700">
                +${isYearly ? addOn.yearlyPrice : addOn.monthlyPrice}
                {isYearly ? "/yr" : "/mo"}
              </p>
            </label>
          );
        })}
      </form>
    </section>
  );
};
