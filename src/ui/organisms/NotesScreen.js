import React from "react";
import { useSelector } from "react-redux";
import Note from "../molecules/Note.tsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {useDispatch} from 'react-redux';
import {deleteNote} from '../../state/slices/notesSlice'

import { PlusCircle } from "react-bootstrap-icons";
import { Nav } from "react-bootstrap";
const NotesScreen = ({ saveNote }) => {
    const dispatch = useDispatch();
    //get the data from the global store
    const notes = useSelector((state) => state.notes.value);

  //sorting the data array on the basis of date
  var sortedNotes = [...notes].sort(
    (a, b) => Number(new Date(a["date"])) - Number(new Date(b["date"]))
  );

  return (
      <>
 <Nav style={{backgroundColor:'#0d6efd',padding:'1rem',color:'white'}}>
     <Nav.Item>
         Keep
     </Nav.Item>
 </Nav>
    <Container>
      <Row align="center" justify="center">
        {sortedNotes.map((i, j) => (
          <Col sm={6} md={12} key={j}>
            <Note
              date={i["date"]}
              title={i["title"]}
              description={i["description"]}
              deleteNote={()=>dispatch(deleteNote({id:i["id"]}))}
            />
          </Col>
        ))}
      </Row>
      <div style={ButtonStyles}>
        <Button variant="primary" onClick={saveNote}>
        <PlusCircle/>
        </Button>
      </div>
    </Container>
    </>
  );
};

const ButtonStyles={
    position: "fixed", bottom: "10px", right: "10px"
}

export default NotesScreen;
