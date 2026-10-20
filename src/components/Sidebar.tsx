interface SidebarProps {
  currentStep: number;
}

const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

export const Sidebar = ({ currentStep }: SidebarProps) => {
  return (
    <aside className="min-h-44 w-full bg-[url('/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat md:min-h-[568px] md:w-[274px] md:shrink-0 md:rounded-xl md:bg-[url('/bg-sidebar-desktop.svg')]">
      <ul className="flex flex-row justify-center gap-5 p-6 md:flex-col md:gap-8 md:p-8">
        {steps.map((step, index) => {
          const isActive = currentStep === index;

          return (
            <li key={step} className="flex items-center gap-4">
              <p
                className={`flex size-9 items-center justify-center rounded-full border border-white font-bold ${
                  isActive ? "bg-sky-100 text-blue-950" : "text-white"
                }`}
              >
                {index + 1}
              </p>

              <div className="hidden flex-col md:flex">
                <p className="text-xs text-gray-300">STEP {index + 1}</p>
                <p className="text-sm font-bold text-white">{step}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
