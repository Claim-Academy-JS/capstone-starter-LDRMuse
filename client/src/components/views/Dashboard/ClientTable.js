import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const ClientTable = ({ clients }) => {
  return (
    <Fragment>
      <div className="has-text-centered">
        <table className="table my-center">
          <tbody>
            <td></td>
          </tbody>
          <button>Add New Chart Entry</button>
        </table>
      </div>
    </Fragment>
  );
};

ClientTable.propTypes = {
  clients: PropTypes.array,
};
