import { TOGGLE_THEME } from "../actions/themeActions";

const initialState = {
    darkMode: localStorage.getItem("darkMode") === "true" ? true : false,
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_THEME:
            const newMode = !state.darkMode;
            localStorage.setItem("darkMode", newMode);
            return { ...state, darkMode: newMode };
        default:
            return state;
    }
};

export default themeReducer;
