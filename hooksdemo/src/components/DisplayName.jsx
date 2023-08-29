import React from "react";

function DisplayName({ name }) {
    console.log("<DisplayName /> renders!!")
    return <div>
        Name in DisplayName Component: {name}
    </div>
}

export default React.memo(DisplayName);