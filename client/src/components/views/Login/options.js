import React from "react";
import PropTypes from "prop-types";

//TODO: get text to fit in buttons

export const Options = ({ loginMode, forgotMode, handler }) => {
  return (
    <div>
      <button className="button mt-4 ml-2" onClick={handler}>
        {loginMode ? "Create Account?" : "Have an Account?"}
      </button>
      <br></br>
      {loginMode && !forgotMode ? (
        <button className="button mt-4 ml-2" onClick={handler}>
          {" "}
          Forgot Password?{" "}
        </button>
      ) : null}
    </div>
  );
};

Options.propTypes = {
  loginMode: PropTypes.bool,
  handler: PropTypes.func,
  forgotMode: PropTypes.bool,
};

Options.defaultProps = { loginMode: false };