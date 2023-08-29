import { useReducer } from "react";
import CountReducer from "../reducer/CountReducer";

const initialState = { count: 0 };

export default function ReducerDemo() {

    const [state, dispatch] = useReducer(CountReducer, initialState);

    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            <button onClick={() => dispatch({ type: 'INCREMENT', payload: 5 })}>+</button>
        </div>
    );
}