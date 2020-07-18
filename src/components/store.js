// import {filmData} from './firebaseConnect'

var redux = require('redux');
const filmInitialState = {
    editItem: {},
    isEdit: false
}
const allReducer = (state = filmInitialState, action) => {
    switch (action.type) {
        case "GET_EDIT_DATA":      
            return {...state,editItem:action.editObject}
        case "CHANGE_EDIT_STATUS":
            return {...state,isEdit:!state.isEdit}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);

export default store;