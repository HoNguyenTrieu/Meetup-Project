import React from "react";
import { GLOBALTYPES } from "../../redux/constants/globalTypes";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import ToastMsg from "./ToastMsg";

const AlertMsg = () => {
  const { alert } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      {alert.loading && <Loading />}
      {alert.error && (
        <ToastMsg
          msg={{ title: "Error", body: alert.error }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor="bg-danger"
        />
      )}
      {alert.success && (
        <ToastMsg
          msg={{ title: "Success", body: alert.success }}
          handleShow={() => dispatch({ type: GLOBALTYPES.ALERT, payload: {} })}
          bgColor="bg-success"
        />
      )}
    </div>
  );
};

export default AlertMsg;
