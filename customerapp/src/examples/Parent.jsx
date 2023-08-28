import { Component } from "react";
import NameChild from "./NameChild";
import AgeChild from "./AgeChild";

export default class Parent extends Component {
    state = {
        name: "Danny",
        age: 29
    }

    render() {
        console.log("Parent Renders!!!")
        return <div>
            <NameChild name={this.state.name} /> <br />
            <AgeChild age={this.state.age} /> <br />
            <button type="button" onClick={() => this.setState({ age: this.state.age + 1 })}>Change Age</button>
            <button type="button" onClick={() => this.setState({ name: this.state.name + ".." })}>Change Name</button>

        </div>
    }
}