const reducerFn = (state, action) => {
  switch (action.type) {
    case "LOGORSIGNUP": {
      return { ...state, haveAccount: !state.haveAccount };
    }
    case "USER_IN" || "SIGNED_UP": {
      return { ...state, user: action.payload };
    }
    case "USER_OUT": {
      return { ...state, user: null };
    }
    case "AUTH_ERR": {
      return {
        ...state,
        authError: { state: true, message: action.payload },
      };
    }
    case "RESET_ERR": {
      return { ...state, authError: { state: false, message: "" } };
    }
    case "START_AUTH_LOADING": {
      return { ...state, authLoading: true };
    }
    case "END_AUTH_LOADING": {
      return { ...state, authLoading: false };
    }
  }
};

export default reducerFn;
