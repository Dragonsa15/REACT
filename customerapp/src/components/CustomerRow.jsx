import { Component } from "react";

export default class CustomerRow extends Component {
    render() {
        let { id, firstName, lastName } = this.props.customer;
        return <div className="row">
            {firstName} {lastName} &nbsp;
            <button type="button" onClick={() => this.deleteRow(id)}>Delete</button>
        </div>
    }
    // add behaviour
    deleteRow(id) {
        console.log("<CustomerRow />", id);
        this.props.delEvent(id);
    }
}

