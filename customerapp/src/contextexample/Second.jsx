import { Component } from "react";
import { ProfileContext } from "./ProfileContextProvider";

export default class Second extends Component {
    render() {
        return <div>
            <h1>Second!!!</h1>
            <ProfileContext.Consumer>
                {
                    value => {
                        return <div>
                            Name: {value.name} <br />
                            Age: {value.age}
                        </div>
                    }
                }
            </ProfileContext.Consumer>
        </div>
    }
}
