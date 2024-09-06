import { cn } from "../lib/utils";

const SectionDivider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("max-w-full", className)}>
      <h1 className="font-headingThin p-4 text-center sm:p-8 text-base sm:text-xl lg:text-3xl 2xl:text-4xl flex items-center justify-center">
        <span>PCC-2024</span>
        <svg
          className="svg-icon h-6 w-6 sm:h-12 sm:w-12 mx-2 sm:mx-8"
          style={{
            fill: "currentColor",
          }}
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M213.333333 750.506667L665.173333 298.666667H384V213.333333h426.666667V640H725.333333V358.826667L273.493333 810.666667 213.333333 750.506667Z" />
        </svg>
        <span>PCC-2024</span>
        <svg
          className="svg-icon h-6 w-6 sm:h-12 sm:w-12 mx-2 sm:mx-8"
          style={{
            fill: "currentColor",
          }}
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M213.333333 750.506667L665.173333 298.666667H384V213.333333h426.666667V640H725.333333V358.826667L273.493333 810.666667 213.333333 750.506667Z" />
        </svg>
        <span className="hidden sm:block">PCC-2024</span>
        <svg
          className="svg-icon hidden sm:block sm:h-12 sm:w-12 mx-2 sm:mx-8"
          style={{
            fill: "currentColor",
          }}
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M213.333333 750.506667L665.173333 298.666667H384V213.333333h426.666667V640H725.333333V358.826667L273.493333 810.666667 213.333333 750.506667Z" />
        </svg>
        <span className="hidden sm:block">PCC-2024</span>
        <svg
          className="svg-icon hidden sm:block sm:h-12 sm:w-12 mx-2 sm:mx-8"
          style={{
            fill: "currentColor",
          }}
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M213.333333 750.506667L665.173333 298.666667H384V213.333333h426.666667V640H725.333333V358.826667L273.493333 810.666667 213.333333 750.506667Z" />
        </svg>
      </h1>
    </div>
  );
};

export default SectionDivider;
