import { SET_BRANCHES } from "../actions/types";

export default (state = {}, action) => {
    switch (action.type) {
        case SET_BRANCHES:
            return {
                ...action.payload
            }
        default:
            return state;
    }
};
