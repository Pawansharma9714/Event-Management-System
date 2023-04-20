import React from "react";

export default function NoDataFound() {
  return (
    <tr>
      <td colSpan={10}>
        <h4 className="text-danger text-center">No Data Found</h4>
      </td>
    </tr>
  );
}
