import React from "react";
import PropTypes from "prop-types";
import 'assets/styles/CardSkeleton.css';

export default function Card({ color, titles }) {
  const TableRow = () => (
    <React.Fragment>
      {titles.map(title => (
        <td key={title} className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <div className="loading-animation"></div>
        </td>
      ))}
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <tbody>
        <tr key="1row">
          <TableRow />
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="loading-animation option"></div>
          </td>
        </tr>
        <tr key="2row">
          <TableRow />
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="loading-animation option"></div>
          </td>
        </tr>
        <tr key="3row">
          <TableRow />
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="loading-animation option"></div>
          </td>
        </tr>
        <tr key="4row">
          <TableRow />
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="loading-animation option"></div>
          </td>
        </tr>
        <tr key="5row">
          <TableRow />
          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
            <div className="loading-animation option"></div>
          </td>
        </tr>
      </tbody>
    </React.Fragment>
  );
}

Card.defaultProps = {
  color: "light",
};

Card.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
