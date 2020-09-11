import React, { Fragment } from "react";
import PropTypes from "prop-types";

export const Charts = ({ charts }) => {
  return (
    <Fragment>
      <div className="container box">
        <table className="table container has-text-centered">
          <thead>
            <tr>
              <th>Date of Service</th>
              <th>Type of Service</th>
              <th>Pigment Brand</th>
              <th>Color Formula</th>
              <th>Needle/Blade Brand</th>
              <th>Needle/Blade Size</th>
              <th>Price of Service</th>
              <th>Additional Notes</th>
            </tr>
          </thead>
          <tbody>
            {charts.map(
              ({
                _id,
                dateOfService,
                typeOfService,
                pigmentBrand,
                colorFormula,
                needleBladeBrand,
                needleBladeSize,
                priceOfService,
                additionalNotes,
              }) => (
                <tr key={_id}>
                  <td>{dateOfService}</td>
                  <td>{typeOfService}</td>
                  <td>{pigmentBrand}</td>
                  <td>{colorFormula}</td>
                  <td>{needleBladeBrand}</td>
                  <td>{needleBladeSize}</td>
                  <td>{priceOfService}</td>
                  <td>{additionalNotes}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

Charts.propTypes = {
  charts: PropTypes.array,
};
