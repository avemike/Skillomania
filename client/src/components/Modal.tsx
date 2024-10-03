import { ReactNode } from "react";
import { Text, Box, Flex } from "@chakra-ui/react";

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function ModalWrapper({ children, isOpen, onClose }: ModalWrapperProps) {
  if (!isOpen) {
    return null;
  }

  /* Prevent closing when clicking inside the modal */
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <Flex
      className="bg-opacity-50"
      position="fixed"
      inset="0"
      zIndex="50"
      alignItems="center"
      justifyContent="center"
      onClick={onClose}
    >
      <Box
        className="transform transition-all sm:max-w-lg sm:w-full"
        bgColor="white"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="xl"
        onClick={handleOverlayClick}
      >
        {children}
      </Box>
    </Flex>
  );
}

function ModalContent({ children }: { children: ReactNode }) {
  return (
    <Box px="4" pb="8" width="100%">
      <Flex className="sm:flex sm:items-start" width="100%">
        <Box
          className="sm:mt-0 sm:text-left "
          width="100%"
          mt="3"
          textAlign="center"
        >
          <Box mt="2" width="100%">
            {children}
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

function ModalFooter({ children }: { children: ReactNode }) {
  return (
    <Flex
      className="sm:px-6 sm:flex sm:flex-row-reverse"
      bgColor="gray.50"
      px="4"
      py="3"
    >
      {children}
    </Flex>
  );
}

function ModalHeader({ children }: { children: ReactNode }) {
  return (
    <Flex className=" sm:px-6 sm:flex" bgColor="gray.50" px="4" py="4">
      {children}
    </Flex>
  );
}

export const Modal = {
  Header: ModalHeader,
  Wrapper: ModalWrapper,
  Content: ModalContent,
  Footer: ModalFooter,
};
