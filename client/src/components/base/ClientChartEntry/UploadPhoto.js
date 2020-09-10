import React from "react";
import PropTypes from "prop-types";

export const UploadPhoto = ({ handler }) => {
  return (
    <form className="box" onSubmit={handler}>
      <div className="field is-grouped is-grouped-centered">
        <div className="file is-primary">
          <label className="file-label">
            <input className="file-input" type="file" />
            <span className="file-cta">
              <span className="file-label">Upload photo/doc</span>
            </span>
            <button className="button is-success level-item">Add It!</button>
          </label>
        </div>
      </div>
    </form>
  );
};

UploadPhoto.propTypes = { handler: PropTypes.func };
