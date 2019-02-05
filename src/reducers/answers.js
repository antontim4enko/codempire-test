import { SET_ANSWER } from "../constans/actionTypes";


//TODO localStorage!!
const initialState = {
    1: '',
    2: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_ANSWER:
        return { ...state, [action.payload.id]: action.payload.answer };
        
    default:
        return state;
    }
}