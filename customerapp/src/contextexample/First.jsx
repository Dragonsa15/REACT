import { Component } from "react";
import Second from "./Second";

export default class First extends Component {
    render() {
        return <div>
            <h1>First Child!!!</h1>
            <Second />
        </div>
    }
}