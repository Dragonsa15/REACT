import { Component } from "react";

export default class NameChild extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        if (this.props.name === prevProps.name) {
            return false;
        }
        return true;
    }
    render() {
        console.log('NameChild re-renders...')
        return <div>
            Name : {this.props.name}
        </div>
    }
}