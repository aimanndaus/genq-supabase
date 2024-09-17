import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl uppercase tracking-wide text-sm font-bold ring-offset-background transition-colors outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        locked:
          "bg-neutral-200 text-primary-foreground hover:bg-neutral-200/90 border-neutral-400 border-b-4 active:border-b-0",
        default:
          "bg-white text-black border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500",
        defaultOutline:
          "bg-transparent text-slate-500 border-transparent border-0 hover:bg-slate-100",
        defaultFooterOutline:
          "bg-transparent text-slate-500 text-xs border-transparent border-0 hover:bg-slate-100",
        primary:
          "bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-t-white border-b-4 active:border-b-0 active:border-t-4",
        primaryOutline: "bg-white text-sky-500 hover:bg-slate-100",
        secondary:
          "bg-yellow text-slate-500 hover:bg-yellowlight border-darkyellow border-t border-b-4 active:border-b-0 active:border-t-4",
        secondaryOutline: "bg-white text-green-500 hover:bg-green-50",
        danger:
          "bg-rose-500 text-primary-foreground hover:bg-rose-500/90 border-rose-600 border-t-white border-b-4 active:border-b-0 active:border-t-4",
        dangerOutline: "bg-white text-rose-500 hover:bg-rose-50",
        super:
          "bg-indigo-500 text-primary-foreground hover:bg-indigo-500/90 border-indigo-600 border-t-white border-b-4 active:border-b-0 active:border-t-4",
        superOutline: "bg-white text-indigo-500 hover:bg-indigo-50",
        sidebar:
          "bg-transparent text-slate-50 border-2 border-transparent hover:bg-sky-500 transition-none",
        sidebarOutline:
          "bg-skyblue text-sky-700 border-sky-300 border-2 hover:bg-skyblue-500/20 transition-none",
        ghost:
          "bg-transparent border-2 border-transparent hover:bg-black/5 dark:bg-white/[0.015] dark:hover:bg-white/5",
        lesson:
          "bg-[#41a7f5] text-white hover:bg-yellowlight border-[#1065c0] border-b-4 active:border-b-0 active:border-t-4",
      },
      size: {
        default: "h-11 px-4 py-2",
        footer: "h-9 px-2",
        sm: "h-9 px-3",
        lg: "h-12 px-8",
        icon: "h-10 w-10",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
