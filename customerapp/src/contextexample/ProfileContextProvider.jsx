import { Component, createContext } from "react";

export const ProfileContext = createContext(); // central placeholder --> Context

export default class ProfileContextProvider extends Component {
    state = {
        name: "Danny",
        age: 29
    }

    render() {
        return <ProfileContext.Provider value={{ ...this.state }}>
            {this.props.children}
        </ProfileContext.Provider>
    }
}