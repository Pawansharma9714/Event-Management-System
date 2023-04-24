import React, { useState } from "react";
import { toast } from "react-toastify";
import { FORM_TYPE } from "../../utils/Constant";

export default function Preferences() {
  const list = localStorage.getItem("customField")
    ? JSON.parse(localStorage.getItem("customField"))
    : [];

  const [fieldTrue, setFieldTrue] = useState(false);
  const [isMandatory, setIsMandatory] = useState(false);
  const [inputValue, setInputValue] = useState({
    labelName: "",
    dataType: "",
  });

  const [inputFields, setInputFields] = useState([{ optionName: "" }]);

  const handleFormChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFields(data);
  };
  const addFields = (e) => {
    e.preventDefault();
    let newfield = { optionName: "" };
    setInputFields([...inputFields, newfield]);
  };
  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const btnNewCustom = () => {
    setFieldTrue(true);
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };


  const handleIsMandatory = () => {
    setIsMandatory(!isMandatory);
  };

  const btnSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.labelName) {
      toast.dismiss();
      toast.error("Enter Label Name");
      return false;
    }
    if (!inputValue.dataType) {
      toast.dismiss();
      toast.error("Select Data Type");
      return false;
    }

    const newList = list.concat({
      labelName: inputValue.labelName,
      dataType:
        inputValue.dataType == FORM_TYPE.DROPDOWN
          ? JSON.stringify({ dataType: inputValue.dataType, optionValue: inputFields })
          : JSON.stringify({ dataType: inputValue.dataType }),
      isMandatory: isMandatory,
      fid: Math.random(),
    });
    if (newList) {
      setFieldTrue(false);
      setIsMandatory(false);
      setInputValue("");
      localStorage.setItem("customField", JSON.stringify(newList));
    }
  };

  const btnCancel = () => {
    setFieldTrue(false);
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 col-sm-6 border-end">
                  <div
                    className="card overflow-hidden mb-4"
                    style={{ height: "300px", boxShadow: "none" }}
                  >
                    <h5 className="">Preferences</h5>
                    <div
                      className="card-body overflow-auto"
                      id="vertical-example"
                    >
                      <p className="cursor-pointer">
                        Invoices
                      </p>
                    </div>
                  </div>
                </div>
                    {!fieldTrue ? (
                      <div className="col-lg-9">
                        <div className="d-flex justify-content-between">
                          <h5 className="">Invoices</h5>
                          <button
                            className="btn btn-success fw-semibold"
                            onClick={btnNewCustom}
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
                            <div
                              className="tab-pane fade show active"
                              id="horizontal-home"
                            >
                              <div className="table-responsive text-nowrap">
                                <table className="table">
                                  <thead>
                                    <tr className="text-center">
                                      <th>FIELD NAME</th>
                                      <th>DATA TYPE</th>
                                      <th>MANDATORY</th>
                                    </tr>
                                  </thead>
                                  <tbody className="table-border-bottom-0">
                                    {list &&
                                      list.map((item, key) => {
                                        return (
                                          <tr key={key}>
                                            <td>{item.labelName}</td>
                                            <td>{JSON.parse(item.dataType).dataType}</td>
                                            <td>
                                              {item.isMandatory
                                                ? "True"
                                                : "False"}
                                            </td>
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
                    ) : (
                      <div className="col-lg-9">
                        <h5 className="">New Custom Field - Invoices</h5>
                        <div className="demo-inline-spacing mt-3">
                          <div className="card-body">
                            <form>
                              <div className="row mb-3">
                                <label
                                  className="col-sm-2 col-form-label"
                                  htmlFor="basic-default-name"
                                >
                                  Label Name{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    type="text"
                                    className="form-control"
                                    name="labelName"
                                    placeholder="Enter Label Name"
                                    onChange={handleInputValue}
                                  />
                                </div>
                              </div>
                              <div className="row mb-3">
                                <label
                                  className="col-sm-2 col-form-label"
                                  htmlFor="basic-default-company"
                                >
                                  Data Type{" "}
                                  <span className="text-danger">*</span>
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    id="defaultSelect"
                                    className="form-select"
                                    name="dataType"
                                    onChange={handleInputValue}
                                  >
                                    <option>Default select</option>
                                    <option value="1">
                                      Text Box (Single Line)
                                    </option>
                                    <option value="2">Number</option>
                                    <option value="3">Email</option>
                                    <option value="4">Dropdown</option>
                                  </select>
                                </div>
                              </div>
                              {inputValue.dataType == FORM_TYPE.DROPDOWN && (
                                <div className="border p-3">
                                  <h3>Options</h3>
                                  {inputFields &&
                                    inputFields.map((item, index) => {
                                      return (
                                        <div className="row mb-3" key={index}>
                                          <label
                                            className="col-sm-2 col-form-label"
                                            htmlFor="basic-default-name"
                                          >
                                            Option {index + 1}
                                            <span className="text-danger">
                                              *
                                            </span>
                                          </label>
                                          <div className="col-sm-6 pe-0">
                                            <input
                                              type="text"
                                              className="form-control"
                                              name="optionName"
                                              placeholder="Enter Option"
                                              value={
                                                item.optionName
                                                  ? item.optionName
                                                  : ""
                                              }
                                              onChange={(event) =>
                                                handleFormChange(index, event)
                                              }
                                            />
                                          </div>
                                          <div
                                            className="col-sm-1 ps-0"
                                            onClick={() => removeFields(index)}
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
                                        onClick={addFields}
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
                                    checked={isMandatory ? true : false}
                                    onChange={handleIsMandatory}
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
                                    checked={!isMandatory ? true : false}
                                    onChange={handleIsMandatory}
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
                                    onClick={btnSubmit}
                                  >
                                    Save
                                  </button>
                                  <button
                                    type="submit"
                                    className="btn btn-secondary ms-3"
                                    onClick={btnCancel}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
