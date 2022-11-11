import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { actions } from './todos.action';
import { TodoModel, todos } from './todos.state';

export const todoReducer = createReducer(
    todos,
    on(actions.addStoredTodosAction, (state, todosObj) => {
        return todosObj.todos
    }),
    on(actions.addTodoAction, (state, todo) => {
        todo = { ...todo, id: state.length + 1 };
        return [...state, todo];
    }),
    on(actions.updateTodoAction, (state, todo) => {
        let index = state.findIndex((t) => todo.id === t.id)

        let newStateArr: Array<any> = [...state]

        if (index != -1) {
            newStateArr[index] = todo;
        }
        return newStateArr;
    }),

    on(actions.deleteTodoAction, (state, todo) => {

        let newState = state.filter((t) => todo.id !== t.id)

        if (newState.length == 0) {
            clearLocalstorage();
        }

        return newState;

    })
);

function clearLocalstorage() {
    localStorage.removeItem('todos');
}

export const todoSelector = createSelector(createFeatureSelector('todos'), (state: TodoModel[]) => state)

