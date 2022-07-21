import { ComponentWithAs, IconProps, Input, InputGroup, InputLeftElement, InputProps } from "@chakra-ui/react";
import React, { ComponentPropsWithoutRef, forwardRef, PropsWithoutRef } from "react";

export interface IFormInput extends ComponentPropsWithoutRef<typeof Input>, InputProps {
  name: string;
  isDisabled?: boolean;
  height: any;
  label?: string;
  isAbs?: boolean;
  remoteError?: string;
  leftElement?: any;
  outerProps?: PropsWithoutRef<JSX.IntrinsicElements["div"]>;
  type?: "text" | "password" | "email" | "number" | "tel" | "file";
  rightElementAction?: () => void;
}

const FormInput = forwardRef<HTMLInputElement, IFormInput>((props, ref) => {
  const {
    name,
    label,
    isDisabled,
    leftElement,
    height = 14,
    isAbs = false,
    rightElementAction,
    outerProps
  } = props;
  return (
    <InputGroup  {...outerProps} border="none" >
      {leftElement && <InputLeftElement  height={height} width={14}>{leftElement}</InputLeftElement>}
      <Input
            w="full"
            pl={14}
            // border={"1px solid #2D2E48"}
            border="1px solid green"
            h={height}
            rounded={4}
            fontSize="sm"
            disabled={isDisabled}
            _hover={{}}
            _focus={{}}
            {...props}
          />
    </InputGroup>
  );
});

export default FormInput;
