import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function GiveAttempts(): JSX.Element {
    const [attemptsRemain, setAttemptsRemain] = useState<number>(3);
    const [attemptsGiven, setAttemptsGiven] = useState<string>("");
    const attemptRequired = parseInt(attemptsGiven) || 0;
    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formAttempts">
                <Form.Label>Input:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsGiven}
                    onChange={(event: ChangeEvent) =>
                        setAttemptsGiven(event.target.value)
                    }
                />
            </Form.Group>
            <div>
                <Button
                    onClick={() =>
                        setAttemptsRemain(attemptsRemain + attemptRequired)
                    }
                >
                    {" "}
                    gain{" "}
                </Button>
                <Button
                    onClick={() => setAttemptsRemain(attemptsRemain - 1)}
                    disabled={attemptsRemain <= 0}
                >
                    {" "}
                    use{" "}
                </Button>
                <div> Attempts: {attemptsRemain} </div>
            </div>
        </div>
    );
}
