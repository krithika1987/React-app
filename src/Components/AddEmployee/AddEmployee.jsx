import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function AddEmployee(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [details,setDetails]=useState({name:'',email:''});


  let handleForm=(e)=>{
let {name,value}=e.target;
let d={...details};
d[name]=value;
setDetails(d);
  }
  let handleSubmit=()=>{
    setShow(false);
    props.sendDetails(details)
    setDetails({name:'',email:''})
    
  }
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Employee
      </Button>
      <Form  >

      <Modal show={show} onHide={handleClose}  backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <Form.Group className="mb-3" controlId="username">
        <Form.Label>Employee Name :</Form.Label>
        <Form.Control type="name" placeholder="Employee Name" onChange={handleForm} value={details.name} name="name" />
      </Form.Group>
       
     
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Employee Email :</Form.Label>
        <Form.Control type="email" placeholder="Employee Email" onChange={handleForm} value={details.email} name="email"/>
      </Form.Group>

    
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit} >
           Submit
          </Button>
        </Modal.Footer>
      </Modal>
      </Form>
    </>
  );
}

