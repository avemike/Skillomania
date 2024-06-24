import { ReactNode } from "react";

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
        onClick={handleOverlayClick}
      >
        {children}
      </div>
    </div>
  );
}

function ModalContent({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 pb-8 w-full">
      <div className="sm:flex sm:items-start w-full">
        <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
          <div className="mt-2 w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

function ModalFooter({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
      {children}
    </div>
  );
}

function ModalHeader({ children }: { children: ReactNode }) {
  return <div className="bg-gray-50 px-4 py-4 sm:px-6 sm:flex">{children}</div>;
}

export const Modal = {
  Header: ModalHeader,
  Wrapper: ModalWrapper,
  Content: ModalContent,
  Footer: ModalFooter,
};
