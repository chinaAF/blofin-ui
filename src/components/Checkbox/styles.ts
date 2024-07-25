import { cva } from "class-variance-authority";
import { BUITheme } from "../..";

const CheckboxCheckedStyles = cva("bu-select-none bu-text-sm", {
  variants: {
    theme: {
      light: ["bu-text-black"],
      dark: ["bu-text-white"]
    }
  }
});

const CheckMarkCheckedStyles = cva(
  "bu-flex bu-h-3 bu-w-3 bu-items-center bu-justify-center bu-border",
  {
    variants: {
      theme: {
        light: ["bu-border-light-primary bu-bg-light-primary after:bu-border-light-background"],
        dark: ["bu-border-dark-primary bu-bg-dark-primary after:bu-border-dark-background"]
      }
    }
  }
);

const CheckMarkVariants = cva(
  "bu-flex bu-h-3 bu-w-3 bu-items-center bu-justify-center bu-border bu-bg-transparent",
  {
    variants: {
      theme: {
        light: ["bu-border-light-label-40"],
        dark: ["bu-border-dark-label-40"]
      }
    }
  }
);

const CheckboxLabelVariants = cva("bu-select-none bu-text-sm", {
  variants: {
    theme: {
      light: ["bu-text-light-label-40"],
      dark: ["bu-text-dark-label-40"]
    }
  }
});

const disabledMarkStyles = cva(
  "bu-flex bu-h-3 bu-w-3 bu-items-center bu-justify-center bu-border bu-bg-transparent"
);

const CheckIconVariants = cva(
  "bu-h-6 bu-w-6 bu-text-light-primary",
  {
    variants: {
      disabled: {
        true: ["bu-text-light-primary-40"],
        false: ["bu-text-light-primary"]
      }
    }
  }
);

export {
  CheckMarkVariants,
  CheckboxLabelVariants,
  CheckMarkCheckedStyles,
  CheckboxCheckedStyles,
  disabledMarkStyles,
  CheckIconVariants
};
