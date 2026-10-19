import { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { FormLayout } from "./components/FormLayout";

function App() {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <main className="min-h-screen bg-blue-50 md:flex md:items-center md:justify-center md:p-8">
      <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col bg-white md:min-h-0 md:flex-row md:rounded-2xl md:p-4">
        <Sidebar />

        <FormLayout currentStep={currentStep} setCurrentStep={setCurrentStep} />
      </div>
    </main>
  );
}

export default App;
