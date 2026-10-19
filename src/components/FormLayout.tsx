import { NavigationButton } from "./NavigationButtons";
import { PersonalInfo } from "../steps/PersonalInfo";
import { SelectPlan } from "../steps/SelectPlan";
import { AddOns } from "../steps/AddOns";
import { Summary } from "../steps/Summary";
import { plans } from "../data/plans";

interface FormLayoutProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FormLayout = ({
  currentStep,
  setCurrentStep,
}: FormLayoutProps) => {
  const steps = [
    <PersonalInfo key="personal-info" />,
    <SelectPlan key="select-plan" plans={plans} />,
    <AddOns key="add-ons" />,
    <Summary key="summary" />,
  ];

  return (
    <div className="flex w-full flex-1 flex-col justify-between px-6 py-8 md:px-16 md:py-10">
      <div>{steps[currentStep]}</div>

      <div
        className={`flex items-center ${
          currentStep === 0 ? "justify-end" : "justify-between"
        }`}
      >
        {currentStep > 0 && (
          <NavigationButton
            onClick={() => setCurrentStep((step) => Math.max(step - 1, 0))}
            navigation="Go Back"
            bgColor="white"
            textColor="hsl(231, 11%, 63%)"
          />
        )}

        <NavigationButton
          onClick={() =>
            setCurrentStep((step) => Math.min(step + 1, steps.length - 1))
          }
          navigation="Next Step"
          bgColor="hsl(213, 96%, 18%)"
          textColor="white"
        />
      </div>
    </div>
  );
};
