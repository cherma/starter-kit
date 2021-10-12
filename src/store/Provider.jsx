import produce from "immer";
import React, { useReducer, createContext, useEffect } from "react";
import { useFetch } from "../api/http";

function createGlobalContext(reducer, initialState) {

  const GlobalContext = createContext({ state: initialState });

  function GlobalProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { data, isLoading, isError } = useFetch('https://jsonplaceholder.typicode.com/todos/');

    useEffect(() => {
      if(data)
        dispatch({ type: 'set_data', data });
    }, [data]);

    return <GlobalContext.Provider {...props} value={{ state, dispatch }} />;
  }

  return [GlobalContext, GlobalProvider];
}

const initialState = {
  table: [],
  isLoading: true
};


function reducer(state = initialState, action) {
  return produce(state, (draft) => {
    console.log(action)

    switch (action.type) {
      case 'set_data': {
        draft.table = [...action?.data];
        draft.isLoading = false;
        break;
      }
      default:
        break;
    }
  });
}

export const [GlobalContext, GlobalProvider] = createGlobalContext(reducer, initialState);