export default function CountReducer(state, action) {
    switch(action.type) {
        case "INCREMENT":
            return {
                count: state.count + action.payload
            }
        case "DECREMENT": 
        return {
            count: state.count - 1
        }
        default: return state;
    }
}

