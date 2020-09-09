import React, { Fragment, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

//input form and button to search client
// table to display prevChart notes? show()?
// need to grab clients name and id from db?
// after name is selected, have a button to go to chart entry history.push(/client/:id)

export const SearchClients = () => {
  //   const history = useHistory();
  //   const { state } = useLocation();

  //   const searchClients = () => {
  // // need to go through clients (filter? and match email?)
  // //client.email.toLowerCase().includes(searchField.toLowerCase()) ?
  //   }

  //   const renderTableRows = (client) =>
  //   (
  //     <tr key={i}>
  //       <td>{name}</td>
  //       <td>{id}</td>
  //       <td>{email}</td>
  //       <td>{notes}</td>
  //     </tr>
  //   );

  //   useEffect(() => {
  //     if (//client from search matches client from MONGO) {
  //       (async () => {
  //         try {
  //           const { client: id, chart, name, email } = await adminAPI.show(id);
  //           //TODO Show above info in table

  //           history.push(`/client/${id}`, { name });
  //         } catch (error) {
  //           console.error(error);
  //         }
  //   })()
  //   } else {
  //     return "Client does not match database"
  //   });
  // }

  return (
    <Fragment>
      <div className="has-text-centered">
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="search"
              placeholder="Search Clients"
            />
          </div>
          <div className="control">
            <button className="button is-success">Search</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

// {/* <div className="has-text-centered">
// {/* only display table when client matches MONGO */}
//   <table className="table my-center">
//     <tbody>{renderTableRows()}</tbody>
//     {/* display button to go to Client Chart entry */}
//     <button>Add New Chart Entry</button>
//   </table>
// </div> */}
