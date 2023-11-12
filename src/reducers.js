
import { ADD_TASK } from "./actions";
import { TOGGLE_TASK } from "./actions";
import { DELETE_TASK } from "./actions";

const initialState = [];


function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { id: Date.now(), description: action.payload.description, isDone: false }];
    case TOGGLE_TASK:
      return state.map(task => 
        (task.id === action.payload.id) ? {...task, isDone: !task.isDone} : task
      );
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state;
  }
}

export default todoReducer;