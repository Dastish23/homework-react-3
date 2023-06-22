import { createStore } from "redux";


const initialState = {
    names : [],
    age : 0,
    usernames : [{
        id : 1,
        title : '',
        num : ''
    },{
        id : 2,
        title : '',
        num : ''
    },{
        id : 3,
        title : '',
        num : ''
    },{
        id : 4,
        title : '',
        num : ''
    }],
    cart : []
}
const reducer = (state = initialState, action) => {
    switch(action.type) {

        case "REGISTER":
            return {
                ...state,
                names : [...state.names, action.payload]
            }


        default :
        return state;
    }
}
export default createStore(reducer)