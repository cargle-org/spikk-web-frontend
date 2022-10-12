import { Box, BoxProps, Button, Center, Flex, Icon, Text } from "@chakra-ui/react";
import React, { ComponentPropsWithoutRef, PropsWithoutRef, useState } from "react";
import { FiUpload } from "react-icons/fi";

export interface IFormFileUpload extends ComponentPropsWithoutRef<typeof Box>, BoxProps {
  name: string;
  isDisabled?: boolean;
  height?: any;
  remoteError?: string;
  file?: any;
  setFile?: 5;
  leftElement?: any;
  buttonProps?: PropsWithoutRef<JSX.IntrinsicElements["button"]>;
  textProps?: PropsWithoutRef<JSX.IntrinsicElements["text"]>;
  type?: "text" | "password" | "email" | "number" | "tel" | "file";
  rightElementAction?: () => void;
}

const FormFileUpload: React.FC<IFormFileUpload> = (props) => {
  const { name, isDisabled, leftElement, height = 14, rightElementAction, buttonProps, textProps, file, setFile } = props;
  const [selectedFile, setSelectedFile] = useState<File>();
  const onHandleUploadClick = () => {
    const fileSelect = document.createElement("input");
    fileSelect.type = "file";
    fileSelect.addEventListener("change", (e) => {
      const target = e.target as HTMLInputElement;
      setSelectedFile(target.files![0]);
    });
    fileSelect.click();
  };
  return (
    <Flex {...props} h={height} rounded={4} alignItems="center" justifyContent={"space-between"} padding={2}>
      <Flex alignItems="center">
        <Center height={height} width={14} flexShrink={0}>
          {leftElement}
        </Center>
        <Text fontSize="sm" maxWidth={"172px"} textOverflow="ellipsis" overflow={"hidden"} whiteSpace="nowrap" px={2} color={ !selectedFile?.name? "#909090" : "white"}>
          {selectedFile?.name || "Attach Image -Optional"}
        </Text>
      </Flex>
      <Button {...buttonProps} isDisabled={isDisabled} height={"full"} w={10} onClick={onHandleUploadClick}>
        <Icon as={FiUpload} boxSize={5} strokeWidth={2.5} />
      </Button>
    </Flex>
  );
};

export default FormFileUpload;
