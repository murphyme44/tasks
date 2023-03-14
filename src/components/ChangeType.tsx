import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qtype, setqtype] = useState<QuestionType>("short_answer_question");
    const [text, setText] = useState<string>("Short Answer");
    function switchtype(): void {
        setqtype(
            qtype === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
        setText(text === "Short Answer" ? "Multiple Choice" : "Short Answer");
    }
    return (
        <div>
            <Button onClick={switchtype}>Change Type</Button>
            Current type: <span>{text}</span>
        </div>
    );
}
