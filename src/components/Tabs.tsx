import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";
import { forwardRef, useId } from "react";
import { cn } from "../utilities/cn";
import { ButtonVariants } from "./Button";

type Tab = {
  name: string;
  value: string;
};
interface ITabs {
  tabs: Tab[];
  onChange?: (index: number) => void;
  defaultValue?: string;
}
const Tabs = forwardRef<HTMLButtonElement, ITabs>(({ tabs, onChange }, ref) => {
  const id = useId();
  return (
    <div>
      <Tab.Group manual onChange={onChange}>
        <Tab.List className={"flex space-x-1"}>
          {tabs.map((t) => (
            <Tab
              key={t.value}
              ref={ref}
              className={cn(
                ButtonVariants({ variant: "unstyled" }),
                `relative overflow-visible rounded-full bg-transparent text-white hover:bg-transparent focus:bg-white/10 data-[pressed]:bg-transparent data-[pressed]:text-gray-500`,
              )}
            >
              {({ selected }) => (
                <>
                  <span className="relative z-20 mix-blend-exclusion">
                    {t.name}
                  </span>

                  {selected && (
                    <motion.div
                      layoutId={`motion_pill_${id}`}
                      style={{ borderRadius: 9999 }}
                      transition={{ type: "spring", duration: 0.6 }}
                      className="absolute inset-0 z-10 bg-white"
                    />
                  )}
                </>
              )}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels>
          {tabs.map((t, idx) => (
            <Tab.Panel key={idx}>
              <div className="">hello {t.name}</div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
});

export default Tabs;
