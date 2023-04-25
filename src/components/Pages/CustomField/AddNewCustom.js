import React from "react";
import { FORM_TYPE } from "../../../utils/Constant";

export default function AddNewCustom(props) {
  return (
    <div className="col-lg-9">
      <h5>New Custom Field - Invoices</h5>
      <div className="demo-inline-spacing mt-3">
        <div className="card-body">
          <form>
            <div className="row mb-3">
              <label
                className="col-sm-2 col-form-label"
                htmlFor="basic-default-name"
              >
                Label Name <span className="text-danger">*</span>
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  name="labelName"
                  placeholder="Enter Label Name"
                  onChange={props.handleInputValue}
                />
              </div>
            </div>
            <div className="row mb-3">
              <label
                className="col-sm-2 col-form-label"
                htmlFor="basic-default-company"
              >
                Data Type <span className="text-danger">*</span>
              </label>
              <div className="col-sm-10">
                <select
                  id="defaultSelect"
                  className="form-select"
                  name="dataType"
                  onChange={props.handleInputValue}
                >
                  <option>Default select</option>
                  <option value="1">Text Box (Single Line)</option>
                  <option value="2">Number</option>
                  <option value="3">Email</option>
                  <option value="4">Dropdown</option>
                </select>
              </div>
            </div>
            {props.inputValue.dataType == FORM_TYPE.DROPDOWN && (
              <div className="border p-3 mb-3">
                <h3>Options</h3>
                {props.inputFields &&
                  props.inputFields.map((item, index) => {
                    return (
                      <div className="row mb-3" key={index}>
                        <label
                          className="col-sm-2 col-form-label"
                          htmlFor="basic-default-name"
                        >
                          Option {index + 1}
                          <span className="text-danger">*</span>
                        </label>
                        <div className="col-sm-6 pe-0">
                          <input
                            type="text"
                            className="form-control"
                            name="optionName"
                            placeholder="Enter Option"
                            value={item.optionName ? item.optionName : ""}
                            onChange={(event) =>
                              props.handleFormChange(index, event)
                            }
                          />
                        </div>
                        <div
                          className="col-sm-1 ps-0"
                          onClick={() => props.removeFields(index)}
                        >
                          <i className="bx bx-x cursor-pointer"></i>
                        </div>
                      </div>
                    );
                  })}
                <div className="row justify-content-end">
                  <div className="col-sm-10">
                    <button
                      type="submit"
                      className="btn btn-info"
                      onClick={props.addFields}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            )}
            <div className="row mb-3">
              <label
                className="col-sm-2 col-form-label"
                htmlFor="basic-default-name"
              >
                Is Mandatory
              </label>
              <div className="col-sm-10">
                <input
                  type="radio"
                  className="form-check-input"
                  name="isMandatory"
                  checked={props.isMandatory ? true : false}
                  onChange={props.handleIsMandatory}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexRadioDefault1"
                >
                  Yes
                </label>
                <input
                  type="radio"
                  className="form-check-input ms-3"
                  name="isMandatory"
                  checked={!props.isMandatory ? true : false}
                  onChange={props.handleIsMandatory}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexRadioDefault1"
                >
                  No
                </label>
              </div>
            </div>

            <div className="row justify-content-end">
              <div className="col-sm-10">
                <button
                  type="submit"
                  className="btn btn-success"
                  onClick={props.btnSubmit}
                >
                  Save
                </button>
                <button
                  type="submit"
                  className="btn btn-secondary ms-3"
                  onClick={props.btnCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
