import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const HomeMsg = ({ onShowModal, setModified, setShowModal }) => {
  const onClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <Modal isOpen={onShowModal} toggle={() => onClose()} centered size="md">
        <ModalHeader toggle={() => onClose()}>More Information</ModalHeader>

        <ModalBody> Hey this is a message</ModalBody>
        <ModalFooter>Thank you</ModalFooter>
      </Modal>
    </>
  );
};
export default HomeMsg;
