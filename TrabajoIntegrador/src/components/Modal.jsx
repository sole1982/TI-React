import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';



const Modals = ({ isOpen, onClose, onDelete, task }) => {
  if (!isOpen) {
    return null; 
  }
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <Button variant="flat"  onClick={handleShow}>
      Queres borrar la tarea?
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>La siguiente en una accion irreversible</Modal.Title>
      </Modal.Header>
      <Modal.Body>¿Estás seguro que quieres borrar "{task.title}"</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={() => onDelete(task.id)} >
          Sí, borrar tarea
        </Button>
        <Button variant="info" onClick={() => {
              onClose();
             
            }} >
          No, no borrar tarea
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default Modals;