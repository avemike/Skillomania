import { Modal } from "./Modal";

/**
 * There are three inputs:
 * - title
 * - description
 * - optional - select where user can pick challengeSeries to add challenge to
 */
interface ChallengeCreationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ChallengeCreationModal({
  isOpen,
  onClose,
}: ChallengeCreationModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        <h3>hehe</h3>
      </div>
    </Modal>
  );
}
