import React, { useState } from "react";
import { saveNote } from "../../state/slices/notesSlice";

import uuid from 'react-uuid';
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";



const TodoSaveModal = ({ show, close }) => {
  const [todoDate, setTodoDate] = useState();
  let today = new Date().toLocaleDateString('fr-CA').slice(0, 10).replaceAll("/","-");
  const [title, setTitle] = useState();
  const [validated, setValidated] = useState(false);
  const [description, setDescription] = useState();
  const dispatch = useDispatch();


//reseting the form fields
const clearFormFields=()=>{
  setTitle();
  setDescription();
  setTodoDate();
  close()
}

//save the form to the global state 
  const save = (e) => {
    e.preventDefault();
    setValidated(true);
    if (todoDate && title && description) {
      const data = { id:uuid(),date: todoDate, title, description };
      dispatch(saveNote(data));
      setValidated(false);
      clearFormFields();
    }
  };


//change input states
  const changeDateInput=(e)=>setTodoDate(e.target.value)
  const changeTitleInput=(e)=> setTitle(e.target.value)
  const changeDescriptionInput=(e)=>setDescription(e.target.value)

  
  return (
    <>
      <Modal
        show={show}
        onHide={clearFormFields}
        backdrop={true}
        centered
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title>Create a note.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
     
          <Form validated={validated} onSubmit={save}>
          <Container>
            <Row>
              <Col xs={12} md={12}>
              <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control
              required
              type="date"
              name="title"
              min={today}
              onChange={changeDateInput}
            />
          </Form.Group>
                
                </Col>
                {todoDate && (
            <>

                <Col xs={12} md={12}>
                <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="description"
                  required
                  placeholder="title of the note"
                  value={title}
                  onChange={changeTitleInput}
                />
              </Form.Group>
                  </Col>
                  <Col xs={12} md={12}>
    
                  <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  required
                  rows={3}
                  placeholder="description of the note"
                  value={description}
                  onChange={changeDescriptionInput }
                />
              </Form.Group>
                    </Col>
                    </>)}

            </Row>
          </Container>
        
          <br />
          <div className="d-grid gap-2">
          <Button type="submit" variant="primary" size="large">Save</Button>
          </div>
          </Form>
        </Modal.Body>
       
      </Modal>
    </>
  );
};

export default TodoSaveModal;
