const ACTIONS = {
  MAKE_REQUEST: "MAKE_REQUEST",
  GET_DATA: "GET_DATA",
  ERROR: "ERROR",
  UPDATE_HAS_NEXT_PAGE: "UPDATE_HAS_NEXT_PAGE",
};

function fetchJobsReducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };

    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };

    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };

    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return {
        ...state,
        hasNextPage: action.payload.hasNextPage,
      };

    default:
      return state;
  }
}

export { ACTIONS, fetchJobsReducer };
