import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftdie, setleftdie] = useState<number>(6);
    const [rightdie, setrightdie] = useState<number>(1);

    function rollleft(): void {
        setleftdie(d6);
    }

    function rollright(): void {
        setrightdie(d6);
    }

    return (
        <div>
            <div>
                <span>
                    <Button data-testid="left-die" onClick={rollleft}>
                        Roll Left = {leftdie}
                    </Button>
                </span>
                <span>
                    <Button data-testid="right-die" onClick={rollright}>
                        Roll Right = {rightdie}
                    </Button>
                </span>
                <span>
                    {leftdie === rightdie && rightdie === 1 ? (
                        <span>Lose</span>
                    ) : leftdie === rightdie ? (
                        <span>Win</span>
                    ) : (
                        <span></span>
                    )}
                </span>
            </div>
        </div>
    );
}
