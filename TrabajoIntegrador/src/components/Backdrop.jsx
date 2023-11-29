import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cards from "./Cards"

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Tareas Futuras
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Tareas Futuras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Cards></Cards>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;