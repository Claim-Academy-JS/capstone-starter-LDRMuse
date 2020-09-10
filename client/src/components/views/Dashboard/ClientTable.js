import React, { Fragment } from "react";
import PropTypes from "prop-types";

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
