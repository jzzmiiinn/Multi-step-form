import { useEffect, useState } from "react";
import { NavigationButton } from "./NavigationButtons";
import { PersonalInfo } from "../steps/PersonalInfo";
import { SelectPlan } from "../steps/SelectPlan";
import { AddOns } from "../steps/AddOns";
import { Summary } from "../steps/Summary";
import { Thankyou } from "../steps/Thankyou";
import { plans } from "../data/plans";
import { validatePersonalInfo } from "../utils/validation";

interface FormData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
  };
  billingCycle: "monthly" | "yearly";
  selectedPlan: string;
  selectedAddons: string[];
  currentStep: number;
}

interface FormLayoutProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const FormLayout = ({
  currentStep,
  setCurrentStep,
}: FormLayoutProps) => {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [showPersonalInfoErrors, setShowPersonalInfoErrors] = useState(false);

  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  const [selectedPlan, setSelectedPlan] = useState<string>("arcade");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);

  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Restore saved form data when the component mounts.
  useEffect(() => {
    try {
      const savedData = localStorage.getItem("multi-step-form");

      if (savedData) {
        const data: unknown = JSON.parse(savedData);

        if (
          typeof data === "object" &&
          data !== null &&
          "personalInfo" in data &&
          "billingCycle" in data &&
          "selectedPlan" in data &&
          "selectedAddons" in data &&
          "currentStep" in data
        ) {
          const saved = data as FormData;

          const validPersonalInfo =
            typeof saved.personalInfo?.name === "string" &&
            typeof saved.personalInfo?.email === "string" &&
            typeof saved.personalInfo?.phone === "string";

          const validBillingCycle =
            saved.billingCycle === "monthly" || saved.billingCycle === "yearly";

          const validSelectedPlan = typeof saved.selectedPlan === "string";

          const validAddons =
            Array.isArray(saved.selectedAddons) &&
            saved.selectedAddons.every((addon) => typeof addon === "string");

          if (
            validPersonalInfo &&
            validBillingCycle &&
            validSelectedPlan &&
            validAddons
          ) {
            setPersonalInfo(saved.personalInfo);
            setBillingCycle(saved.billingCycle);
            setSelectedPlan(saved.selectedPlan);
            setSelectedAddons(saved.selectedAddons);
          }

          if (
            Number.isInteger(saved.currentStep) &&
            saved.currentStep >= 0 &&
            saved.currentStep <= 3
          ) {
            setCurrentStep(saved.currentStep);
          }
        }
      }
    } catch (error) {
      console.error("Could not load saved form data:", error);
    } finally {
      setIsLoaded(true);
    }
  }, [setCurrentStep]);

  // Save form data whenever its values or current step change.
  useEffect(() => {
    if (!isLoaded) return;

    const formData: FormData = {
      personalInfo,
      billingCycle,
      selectedPlan,
      selectedAddons,
      currentStep,
    };

    try {
      localStorage.setItem("multi-step-form", JSON.stringify(formData));
    } catch (error) {
      console.error("Could not save form data:", error);
    }
  }, [
    isLoaded,
    personalInfo,
    billingCycle,
    selectedPlan,
    selectedAddons,
    currentStep,
  ]);

  // Validate the personal information before moving to the next step.
  const personalInfoErrors = validatePersonalInfo(personalInfo);

  const isPersonalInfoValid = Object.values(personalInfoErrors).every(
    (error) => error === "",
  );

  const steps = [
    <PersonalInfo
      key="personal-info"
      values={personalInfo}
      setValues={setPersonalInfo}
      showErrors={showPersonalInfoErrors}
    />,
    <SelectPlan
      key="select-plan"
      plans={plans}
      billingCycle={billingCycle}
      setBillingCycle={setBillingCycle}
      selectedPlan={selectedPlan}
      setSelectedPlan={setSelectedPlan}
    />,
    <AddOns
      key="add-ons"
      billingCycle={billingCycle}
      selectedAddons={selectedAddons}
      setSelectedAddons={setSelectedAddons}
    />,
    <Summary
      key="summary"
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      selectedPlan={selectedPlan}
      billingCycle={billingCycle}
      selectedAddons={selectedAddons}
    />,
  ];

  // Wait for saved data to load before rendering the form.
  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex w-full flex-1 flex-col justify-between px-6 py-8 md:px-16 md:py-10">
      {isSubmitted ? (
        <Thankyou />
      ) : (
        <>
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

            {currentStep < 3 ? (
              <NavigationButton
                onClick={() => {
                  if (currentStep === 0) {
                    setShowPersonalInfoErrors(true);

                    if (!isPersonalInfoValid) return;
                  }

                  setCurrentStep((step) =>
                    Math.min(step + 1, steps.length - 1),
                  );
                }}
                navigation="Next Step"
                bgColor="hsl(213, 96%, 18%)"
                textColor="white"
              />
            ) : (
              <NavigationButton
                onClick={() => setIsSubmitted(true)}
                navigation="Confirm"
                bgColor="hsl(243, 100%, 62%)"
                textColor="white"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};
