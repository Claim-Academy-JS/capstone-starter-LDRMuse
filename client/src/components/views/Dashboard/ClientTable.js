import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Link, useLocation } from "react-router-dom";

export const ClientTable = ({ clients }) => {
  return (
    <Fragment>
      <div className="container box">
        <h1 className="title is-4 has-text-centered">Current Clients</h1>
        <table className="table container has-text-centered">
          <tbody>
            {clients.map(({ _id, firstName, lastName, email, phone }) => (
              <tr key={_id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <Link
                  className="button is-success is-small my-2"
                  to={{
                    pathname: `/client/${_id}`,
                    state: {
                      currentClient: { firstName, lastName, email, phone },
                    },
                  }}
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
