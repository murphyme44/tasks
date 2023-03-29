import React, { useState } from "react";
import { Form } from "react-bootstrap";

type ChangeEvent = React.ChangeEvent<
    HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
>;

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your name");
    const [student, setStudent] = useState<boolean>(true);
    const [mode, setMode] = useState<boolean>(false);

    function updateMode(event: React.ChangeEvent<HTMLInputElement>) {
        setMode(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateName(event: ChangeEvent) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                {student ? (
                    <span>{name} is a student </span>
                ) : (
                    <span> {name} is not a student </span>
                )}
            </div>
            <div>
                <Form.Group controlId="formInput">
                    <div>
                        <Form.Check
                            type="switch"
                            id="mode-check"
                            label="Edit Mode"
                            checked={mode}
                            onChange={updateMode}
                        />
                    </div>
                    {mode && (
                        <div>
                            <div>
                                <Form.Control
                                    value={name}
                                    onChange={updateName}
                                    disabled={!mode}
                                />
                            </div>

                            <Form.Check
                                type="switch"
                                id="student-check"
                                label="Is Student?"
                                checked={student}
                                onChange={updateStudent}
                                disabled={!mode}
                                hidden={!mode}
                            />
                        </div>
                    )}
                </Form.Group>
            </div>
        </div>
    );
}
