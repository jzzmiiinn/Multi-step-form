export const Sidebar = () => {
  return (
    <aside className="min-h-44 w-full bg-[url('/bg-sidebar-mobile.svg')] bg-cover bg-center bg-no-repeat md:min-h-[568px] md:w-[274px] md:shrink-0 md:rounded-xl md:bg-[url('/bg-sidebar-desktop.svg')] md:bg-cover">
      <ul className="flex flex-row justify-center gap-5 p-6 md:flex-col md:gap-8 md:p-8">
        <li className="flex items-center gap-4">
          <p className="flex size-9 items-center justify-center rounded-full border border-white bg-sky-100 font-bold text-blue-950">
            1
          </p>
          <div className="hidden flex-col md:flex">
            <p className="text-xs text-gray-300">STEP 1</p>
            <p className="text-sm font-bold text-white">YOUR INFO</p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <p className="flex size-9 items-center justify-center rounded-full border border-white font-bold text-white">
            2
          </p>
          <div className="hidden flex-col md:flex">
            <p className="text-xs text-gray-300">STEP 2</p>
            <p className="text-sm font-bold text-white">SELECT PLAN</p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <p className="flex size-9 items-center justify-center rounded-full border border-white font-bold text-white">
            3
          </p>
          <div className="hidden flex-col md:flex">
            <p className="text-xs text-gray-300">STEP 3</p>
            <p className="text-sm font-bold text-white">ADD-ONS</p>
          </div>
        </li>

        <li className="flex items-center gap-4">
          <p className="flex size-9 items-center justify-center rounded-full border border-white font-bold text-white">
            4
          </p>
          <div className="hidden flex-col md:flex">
            <p className="text-xs text-gray-300">STEP 4</p>
            <p className="text-sm font-bold text-white">SUMMARY</p>
          </div>
        </li>
      </ul>
    </aside>
  );
};
