import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "lime"
];

export function ChangeColor(): JSX.Element {
    const [choice, setChoice] = useState<string>("red");
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <p>
                    <span>
                        You have chosen{" "}
                        <span
                            data-testid="colored-box"
                            style={{ backgroundColor: choice, color: "white" }}
                        >
                            {choice}
                        </span>
                    </span>
                </p>
                {COLORS.map((color: string) => (
                    <Form.Check
                        key={color}
                        inline
                        type="radio"
                        name="colors"
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setChoice(event.target.value)}
                        id={"colors-choice" + color}
                        label={color}
                        style={{ backgroundColor: color }}
                        value={color}
                        checked={choice === color}
                    />
                ))}
            </div>
        </div>
    );
}
