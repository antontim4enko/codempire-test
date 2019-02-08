import { SET_ANSWER } from '../constans/actionTypes';

let initialState = null;
if (localStorage.getItem('answers') !== null) {
    initialState = JSON.parse(localStorage.getItem('answers'));
} else {
    initialState = {
        1: '',
        2: [],
        3: '',
        4: [],
        5: '',
    };
}

// const initialState = {
//     1: '',
//     2: [],
//     3: '',
//     4: [],
//     5: ''
// };

export default function (state = initialState, action) {
    switch (action.type) {
    case SET_ANSWER:
        localStorage.setItem('answers', JSON.stringify({ ...state, [action.payload.id]: action.payload.answer }));
        return { ...state, [action.payload.id]: action.payload.answer };

    default:
        return state;
    }
}
