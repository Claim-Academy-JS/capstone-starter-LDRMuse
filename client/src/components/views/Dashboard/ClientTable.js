import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

export const ClientTable = ({ clients }) => {
  return (
    <Fragment>
      <div className="container box">
        <h1 className="title is-4 has-text-centered">Current Clients</h1>
        <table className="table container has-text-centered">
          <tbody>
            {clients.map((client) => (
              <tr key={client._id}>
                <td>{client.firstName}</td>
                <td>{client.lastName}</td>
                <td>{client.email}</td>
                <td>{client.phone}</td>
                <Link
                  className="button is-success is-small my-2"
                  to="/client/:id"
                >
                  Add New Chart Entry
                </Link>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

ClientTable.propTypes = {
  clients: PropTypes.array,
};
