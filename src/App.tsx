import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import mydog from "./images/buddy.png";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript Michael Murphy
            </header>
            <h1 className="App-myheader">Me and my dog</h1>
            <p>
                Hello World Edit <code>src/App.tsx</code> and save. This page
                will automatically reload.
            </p>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <ul>
                            <li>I am from Red Bank, New Jersey</li>
                            <li>My dog is named Buddy</li>
                            <li>I am a computer science major</li>
                        </ul>
                        <div
                            style={{
                                width: 150,
                                height: 50,
                                backgroundColor: "red"
                            }}
                        >
                            Red Rectangle
                        </div>
                    </Col>
                    <Col>
                        <img
                            src={mydog}
                            alt="A picture of me and my dog Buddy"
                            width="300"
                            height="400"
                        />
                        <div
                            style={{
                                width: 150,
                                height: 50,
                                backgroundColor: "red"
                            }}
                        >
                            Red Rectangle
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
