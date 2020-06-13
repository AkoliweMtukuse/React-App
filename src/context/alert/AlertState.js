import React, { useReducer, useState } from "react";
import AlertContext from "../alert/alertContext";
import AlertReducer from "../alert/alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

const AlertState = (props) => {
  const initialState = null;
  const [state, dispatch] = useReducer(AlertReducer, initialState);

  const [alert, setAlert] = useState(null);

  // alerts if theres nothing in the search panel
  const setALert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: REMOVE_ALERT }), 5000);
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};
export default AlertState;
