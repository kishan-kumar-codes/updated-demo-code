interface TabOption {
  label: string;
  value: string;
}

interface TabsProps {
  options: TabOption[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const LoadingTab: React.FC<TabsProps> = ({
  options,
  activeTab,
  onTabChange,
}) => {
  const isActive = (tab: string) =>
    activeTab === tab
      ? "bg-[#631363] text-white"
      : "bg-[#F4F4F4] text-[#5F1762]";

  return (
    <div className="flex w-full items-center md:flex-wrap md:gap-2  gap-1 ">
      {options.map((option) => (
        <div
          key={option.value}
          onClick={() => onTabChange(option.value)}
          className={`flex border border-[#5F1762] p-2 text-wrap cursor-pointer gap-1 text-center items-center justify-center rounded-3xl md:rounded-full tracking-tighter lg:text-lg md:font-normal md:text-[16px] lg:min-h-[66px] lg:min-w-[160px] md:min-h-[66px] md:min-w-[160px]  max-w-[90px] min-h-[40px] min-w-[70px]  md:max-w-[160px] leading-3 md:leading-4 lg:leading-5 font-bold py-1 md:py-3  ${isActive(
            option.value
          )} text-[8px] font-bold`}>
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default LoadingTab;
