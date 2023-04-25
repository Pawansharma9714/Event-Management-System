import React, { useState } from "react";
import { toast } from "react-toastify";
import { FORM_TYPE } from "../../../utils/Constant";
import AddNewCustom from "./AddNewCustom";
import Invoices from "./Invoices";

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
          ? JSON.stringify({
              dataType: inputValue.dataType,
              optionValue: inputFields,
            })
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
    setInputValue("");
    setInputFields([{ optionName: "" }]);
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card mb-4">
            <div className="card-body">
              <div className="row">
                <div className="col-md-2 col-sm-4 border-end">
                  <div
                    className="card overflow-hidden mb-4"
                    style={{ boxShadow: "none" }}
                    // style={{ height: "300px", boxShadow: "none" }}
                  >
                    <h5>Preferences</h5>
                    <div
                      className="card-body overflow-auto"
                      id="vertical-example"
                    >
                      <p className="cursor-pointer">Invoices</p>
                    </div>
                  </div>
                </div>
                {!fieldTrue ? (
                  <Invoices btnNewCustom={btnNewCustom} list={list} />
                ) : (
                  <AddNewCustom
                    handleInputValue={handleInputValue}
                    inputValue={inputValue}
                    inputFields={inputFields}
                    handleFormChange={handleFormChange}
                    removeFields={removeFields}
                    addFields={addFields}
                    isMandatory={isMandatory}
                    handleIsMandatory={handleIsMandatory}
                    btnSubmit={btnSubmit}
                    btnCancel={btnCancel}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
