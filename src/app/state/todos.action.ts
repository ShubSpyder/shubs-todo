import { createAction, props } from "@ngrx/store";
import { TodoModel } from './todos.state'

export const browserReload = createAction('[TODO] Browser_Reload', props<any>())
export const addStoredTodosAction = createAction('[TODO] ADD_STORED_TODOS', props<any>())
export const addTodoAction = createAction('[TODO] ADD_TODO', props<TodoModel>())
export const updateTodoAction = createAction('[TODO] UPDATE_TODO', props<TodoModel>())
export const deleteTodoAction = createAction('[TODO] DELETE_TODO', props<TodoModel>())

export const actions = {addStoredTodosAction, addTodoAction, updateTodoAction, deleteTodoAction }