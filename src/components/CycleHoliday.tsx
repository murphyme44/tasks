import React, { useState } from "react";
import { Button } from "react-bootstrap";
//🎄🎃🍀🇺🇸🐣

export function CycleHoliday(): JSX.Element {
    const [holiday, setholiday] = useState<Holiday>("🍀");
    const [holiday2, setholiday2] = useState<Holiday>("🇺🇸");
    type Holiday = "🎄" | "🎃" | "🍀" | "🇺🇸" | "🐣";

    const chronological: Record<Holiday, Holiday> = {
        "🍀": "🐣",
        "🐣": "🇺🇸",
        "🇺🇸": "🎃",
        "🎃": "🎄",
        "🎄": "🍀"
    };

    const alphabetical: Record<Holiday, Holiday> = {
        "🇺🇸": "🎄",
        "🎄": "🐣",
        "🐣": "🎃",
        "🎃": "🍀",
        "🍀": "🇺🇸"
    };

    function changeChronological(): void {
        const newHoliday = chronological[holiday];
        setholiday(newHoliday);
    }

    function changeAlphabetical(): void {
        const newHoliday = alphabetical[holiday2];
        setholiday2(newHoliday);
    }

    return (
        <div>
            <Button onClick={changeChronological}>Year</Button>
            Holiday: <span>{holiday}</span>
            <Button onClick={changeAlphabetical}>Alphabet</Button>
            Holiday: <span>{holiday2}</span>
        </div>
    );
}
