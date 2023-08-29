import { useState } from "react";

export default function StateDemo() {
    let [name, setName] = useState("Raj");
    let [age, setAge] = useState(18);

    return <div>
        Name: {name} <br />
        Age : {age} <br />
        <button type="button" onClick={() => setAge(age + 1)}>Change Age</button>
        <button type="button" onClick={() => setName(name + "..")}>Change Name</button>
    </div>
}
