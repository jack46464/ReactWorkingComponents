import { createStore } from "redux";

const ReactStore=()=>{
const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case "INCREMENT": return { count: state.count + 1 };
        case "DECREMENT": return { count: state.count - 1 };
        default: return state;
    }
};

const store = createStore(counterReducer);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });
console.log(store.getState());
};
export default ReactStore;