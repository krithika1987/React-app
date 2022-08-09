import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function SettingsButton({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Settings
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul>
            <li>ABOUT US</li>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>CONTACT US</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Settings() {
  return (
    <>
      {['end'].map((placement, idx) => (
        <SettingsButton key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Settings;