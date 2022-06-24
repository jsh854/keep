import React from 'react'
import { Card, Button,Row,Col}from 'react-bootstrap';
import { Archive } from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
type nodeTypes = {
  date: string,
  title: string,
  description: string,
  deleteNote:()=>void
}
const Note = ({ date, title, description,deleteNote }: nodeTypes) => {
  return <Card style={cardStyles}>
          <Card.Header>
            <Container>
            <Row align="center">
              <Col md={10} sm={8} xs={10}>
              {title}
              </Col>
              <Col md={2} sm={2} xs={1}>
              <Button variant='outline-danger' onClick={()=>{
                deleteNote()
                }}><Archive/></Button>
              </Col>
            </Row>
            </Container>
          
       
          </Card.Header>
          <Card.Text>
            {description}</Card.Text>
          <Card.Footer>
            {date}
          </Card.Footer>
        </Card>

}

const cardStyles={
  maxWidth: "24rem",
  margin: '1rem', 
  border: '1px solid #0d6efd'
}

export default Note;