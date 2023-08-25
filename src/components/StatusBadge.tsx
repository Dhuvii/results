import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../utilities/cn";

const pillVariants = {
  variant: {
    active: "bg-green-500/10 border-green-500/30 text-green-500",
    deactive: "bg-red-500/10 border-red-500/30 text-red-500",
    idle: "bg-yellow-400/10 border-yellow-400/30 text-yellow-400",
  },
};

const indicatorVariants = {
  variant: {
    active: "bg-green-500",
    deactive: "bg-red-500",
    idle: "bg-yellow-400",
  },
};

const defaultStyles = `inline-flex items-center gap-2 rounded-full border px-5 py-1`;

const PillVariants = cva(defaultStyles, {
  variants: pillVariants,
  defaultVariants: {
    variant: "active",
  },
});

const IndicatorVariants = cva(``, {
  variants: indicatorVariants,
  defaultVariants: {
    variant: "active",
  },
});

interface IStatusBadge
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    VariantProps<typeof PillVariants> {
  children: React.ReactNode;
}
const StatusBadge = ({ children, variant, className }: IStatusBadge) => {
  return (
    <div className={cn(PillVariants({ variant, className }))}>
      <div
        className={`${cn(
          `flex h-2 w-2 items-center justify-center rounded-full`,
          IndicatorVariants({ variant }),
        )}`}
      >
        <div
          className={`${cn(`animate-ping rounded-full bg-inherit p-1`)}`}
        ></div>
      </div>
      {children}
    </div>
  );
};

export default StatusBadge;
