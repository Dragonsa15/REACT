import { Component } from "react";

export default class CustomerRow extends Component {
    render() {
        let customer = this.props.customer;
        return <div>
            {customer.firstName} {customer.lastName} &nbsp;
            <button type="button">Delete</button>
        </div>
    }
}