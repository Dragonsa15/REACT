import React from "react";

function DisplayAge({ age }) {
    console.log("<DisplayAge /> renders!!")
    return <div>
        Age in DisplayAge Component: {age}
    </div>
}

function check(prevProps, currProps) {
    console.log(prevProps, currProps)
    return prevProps.age === currProps.age
}

// check closure.html
export default React.memo(DisplayAge, check);