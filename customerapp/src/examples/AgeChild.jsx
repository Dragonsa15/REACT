import { Component } from "react";

export default class AgeChild extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        if (this.props.age === prevProps.age) {
            return false;
        }
        return true;
    }
    render() {
        console.log('AgeChild re-renders...')
        return <div>
            Age : {this.props.age}
        </div>
    }
}