import React from "react";
import { Link } from "react-router-dom";

function WorkspaceDetails() {
  return (
    <div className=" font-medium text-black">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Due Date</th>
            <th>Video Details</th>
            <th>Video Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* For loop here */}

          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center ">
                <div className="font-bold">22 August 2023</div>
              </div>
            </td>
            <td className="font-bold">How to do something</td>
            <td>Processing</td>
            <th>
              <button className="btn btn-ghost btn-xs">Check Details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center ">
                <div className="font-bold">22 August 2023</div>
              </div>
            </td>
            <td className="font-bold">How to do something</td>
            <td>Processing</td>
            <th>
              <button className="btn btn-ghost btn-xs">Check Details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center ">
                <div className="font-bold">22 August 2023</div>
              </div>
            </td>
            <td className="font-bold">How to do something</td>
            <td>Processing</td>
            <th>
              <button className="btn btn-ghost btn-xs">Check Details</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WorkspaceDetails;
