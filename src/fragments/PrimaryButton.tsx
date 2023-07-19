import * as React from "react";
import Link from "next/link";
import { Button, type ButtonProps, type LinkProps, type SystemStyleObject } from "@chakra-ui/react";

type PrimaryButtonProps = ButtonProps & LinkProps;

export default function PrimaryButton({ variant, href, children, ...props }: PrimaryButtonProps): React.JSX.Element {
  const setButtonStyleBasedOnVariant = (solidVariantStyle: string, outlinedVariantStyle: string): string => {
    return variant === "solid" ? solidVariantStyle : outlinedVariantStyle;
  };

  const setButtonHoverStyleBasedOnVariant = (solidVariantHoverStyle: SystemStyleObject, outlinedVariantHoverStyle: SystemStyleObject): SystemStyleObject => {
    return variant === "solid" ? solidVariantHoverStyle : outlinedVariantHoverStyle;
  };

  return (
    <Button
      as={href ? Link : "button"}
      href={href}
      variant={variant}
      border="2px"
      fontWeight="medium"
      color={setButtonStyleBasedOnVariant("white", "primary")}
      borderColor={setButtonStyleBasedOnVariant("transparent", "primary")}
      backgroundColor={setButtonStyleBasedOnVariant("primary", "transparent")}
      transition="all 300ms"
      _hover={setButtonHoverStyleBasedOnVariant(
        {
          backgroundColor: "blue.800",
        },
        {
          color: "white",
          backgroundColor: "primary",
        }
      )}
      {...props}
    >
      {children}
    </Button>
  );
}
