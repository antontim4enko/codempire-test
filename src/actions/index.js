import { SET_ANSWER } from "../constans/actionTypes";

export const setAnswer = (id, answer) => ({
    type: SET_ANSWER,
    payload: {
        id,
        answer,
    }
});