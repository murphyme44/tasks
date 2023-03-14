import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startquiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }

    function stopquiz(): void {
        setProgress(false);
    }

    return (
        <div>
            <Button onClick={startquiz} disabled={progress || !attempts}>
                Start Quiz
            </Button>
            <Button onClick={stopquiz} disabled={!progress}>
                Stop Quiz
            </Button>
            <Button
                onClick={() => setAttempts(attempts + 1)}
                disabled={progress}
            >
                Mulligan
            </Button>
            {attempts}
        </div>
    );
}
