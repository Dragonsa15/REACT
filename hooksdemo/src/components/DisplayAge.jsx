import React from "react";

function DisplayAge({ age }) {
    console.log("<DisplayAge /> renders!!")
    return <div>
        Age in DisplayAge Component: {age}
    </div>
}
// check closure.html
export default React.memo(DisplayAge);