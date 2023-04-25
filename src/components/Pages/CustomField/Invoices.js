import React from "react";
import { FORM_TYPE } from "../../../utils/Constant";

export default function Invoices(props) {
  return (
    <div className="col-md-10 col-sm-8">
      <div className="d-flex justify-content-between">
        <h5 className="">Invoices</h5>
        <button
          className="btn btn-success fw-semibold"
          onClick={props.btnNewCustom}
        >
          <i className="bx bx-plus"></i>
          New Custom Field
        </button>
      </div>
      <div className="demo-inline-spacing mt-3">
        <div className="list-group list-group-horizontal-md text-md-center">
          <a
            className="active border-bottom"
            id="home-list-item"
            data-bs-toggle="list"
            href="#horizontal-home"
          >
            Field Customization
          </a>
        </div>
        <div className="px-0 mt-0">
          <div className="tab-pane fade show active" id="horizontal-home">
            <div className="table-responsive text-nowrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>FIELD NAME</th>
                    <th>DATA TYPE</th>
                    <th>MANDATORY</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  {props.list &&
                    props.list.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>{item.labelName}</td>
                          <td>
                            {JSON.parse(item.dataType).dataType ==
                            FORM_TYPE.TEXTBOX
                              ? "text"
                              : JSON.parse(item.dataType).dataType ==
                                FORM_TYPE.NUMBER
                              ? "number"
                              : JSON.parse(item.dataType).dataType ==
                                FORM_TYPE.EMAIL
                              ? "email"
                              : JSON.parse(item.dataType).dataType ==
                                FORM_TYPE.DROPDOWN
                              ? "dropdown"
                              : ""}
                          </td>
                          <td>{item.isMandatory ? "True" : "False"}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
