import { Component } from "react";
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";

export default class CustomerList extends Component {
    state = {
        customers: [
            {
                "id": 1,
                "firstName": "Rachel",
                "lastName": "Green",
            },
            {
                "id": 2,
                "firstName": "Joey",
                "lastName": "Tribbiani",
            },
            {
                "id": 3,
                "firstName": "Monica",
                "lastName": "Geller",
            },
            {
                "id": 4,
                "firstName": "Phoebe",
                "lastName": "Buffay",
            },
            {
                "id": 5,
                "firstName": "Chandler",
                "lastName": "Bing",
            },
            {
                "id": 6,
                "firstName": "Ross",
                "lastName": "Geller",
            },
        ]
    }


    // returns JSX which is converted into react.element; similar to function component
    // returned value
    render() {
        return <div>
            <Filter />
            {
                this.state.customers.map(customer => <CustomerRow
                    delEvent={(id) => this.deleteCustomer(id)}
                    customer={customer}
                    key={customer.id} />)
            }
        </div>
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id);
        // this.setState({
        //     customers: custs
        // })
        this.state.customers = custs;
    }
}