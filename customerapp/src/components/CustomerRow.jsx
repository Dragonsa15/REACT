import { Component } from "react";

export default class CustomerRow extends Component {
    render() {
        let { id, firstName, lastName } = this.props.customer;
        return <div>
            {firstName} {lastName} &nbsp;
            <button type="button">Delete</button>
        </div>
    }
}