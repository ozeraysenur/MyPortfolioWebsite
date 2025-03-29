import { CHANGE_LANGUAGE } from "../actions/langActions";

const initialState = {
    language: localStorage.getItem("language") || "en",
};

const langReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            localStorage.setItem("language", action.payload);
            return { ...state, language: action.payload };
        default:
            return state;
    }
};

export default langReducer;
