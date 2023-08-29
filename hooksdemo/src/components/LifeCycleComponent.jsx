import { useState, useEffect } from "react";

export default function LifeCycleComponent() {
    let [name, setName] = useState("Raj");
    let [age, setAge] = useState(18);

    // similar to componentDidMount()
    // Make API calls here...
    useEffect(() => {
        console.log("Called once when component is mounted!!!");

        return () => console.log("this is similar to componentWillUnmount()");
    }, []);

    // similar to componentDidUpdate()
    // any change in state or props this is called
    useEffect(() => {
        console.log("Called when state or props change!!!");
    });

    useEffect(() => {
        console.log("called when age changes!!!");
    }, [age]);

    return <div>
        Name: {name} <br />
        Age : {age} <br />
        <button type="button" onClick={() => setAge(age + 1)}>Change Age</button>
        <button type="button" onClick={() => setName(name + "..")}>Change Name</button>
    </div>
}