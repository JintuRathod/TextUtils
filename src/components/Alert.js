import React from "react";
import PropTypes from "prop-types";

function Alert(props) {
  const capitalized = (word) => {
    let capWord = word.toLowerCase();
    return capWord.charAt(0).toUpperCase() + capWord.slice(1);
  };

  return (
    <>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalized(props.alert.msg.slice(0))}</strong>{" "}
          {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </>
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    msg: PropTypes.string,
    type: PropTypes.string,
  }),
};

export default Alert;
