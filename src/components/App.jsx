import React from "react"
import {Container, Alert, Row, Col, InputGroup, Input, Button} from "reactstrap"

class App extends React.Component{
    render(){
        return(
            <Container>
                <Row>
                    <Col xs="12" md="12" lg="12">
                        <Alert color="success" className="text-center"><h1>Todo App</h1></Alert>
                    </Col>
                </Row>
                <Row>
                    <InputGroup>
                        <Input placeholder="Add Todo"/>
                        <Button color="success">Add Todo</Button>
                    </InputGroup>
                </Row>
            </Container>
        )
    }
}

export default App