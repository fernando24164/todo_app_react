import React from "react"
import {Container, Alert} from "reactstrap"

class App extends React.Component{
    render(){
        return(
            <Container>
                <Alert color="success"><h1>Test!</h1></Alert>
            </Container>
        )
    }
}

export default App