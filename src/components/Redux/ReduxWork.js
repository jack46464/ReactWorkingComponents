import { createStore } from "redux";

const ReduxWork=()=>{

function addTask(task) {
   
  return {
     
    type: 'ADD_TODO',
    task: task
  }
}
 
function removeTask(task) {
  
  return {
    type: 'REMOVE_TODO',
    task: task
  }
}
// const counterReducer = (state = { count: 0 }, action) => {
//     switch (action.type) {
//         case "INCREMENT": return { count: state.count + 1 };
//         case "DECREMENT": return { count: state.count - 1 };
//         default: return state;
//     }
// };

// const counterReducer = (state = {tasks:[]}, action) => {
//     switch (action.type) {
//         case "ADD_TODO": return [tasks, action.task];
//         case "REMOVE_TODO":  return tasks.filter(task => task !== action.task);
//         default: return state;
//     }
   
// };

function task(tasks = [], action) {
   
  if (action.type === 'ADD_TODO') {
    return [...tasks, action.task];
  } else if (action.type === 'REMOVE_TODO') {
      return tasks.filter(task => task !== action.task);
    }
  return tasks;
}

const store = createStore(task);

const add = addTask('Wake up');
console.log(add);
 
// Dispatch usually trigger reducer and perform task
store.dispatch(add);
 
// getState() function is used to get current state
console.log(store.getState());
 
store.dispatch(addTask('Study'));
store.dispatch(addTask('Eat'));
store.dispatch(addTask('Go to sleep'));
store.dispatch(removeTask('Eat'));
store.dispatch(addTask('Work'));
store.dispatch(addTask('Sleep'));
store.dispatch(removeTask('Sleep'));
console.log(store.getState());
};
export default ReduxWork;