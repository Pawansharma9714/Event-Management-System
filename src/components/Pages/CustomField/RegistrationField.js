import React, { useState } from "react";
import { stateList } from "../../../utils/Constant";

export default function RegistrationField() {
  const [isChecked, setIsChecked] = useState(false);

  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    dob: "",
    gender: "",
    mobile: "",
    address: "",
    pincode: "",
  });

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const [fromState, setFromState] = useState("");
  const [fromCities, setFromCities] = useState([]);
  const [cityValue, setCityValue] = useState("");

  const handleFromState = (e) => {
    const state = stateList.find((state) => state.name === e.target.value);
    setFromState(state.name);
    setFromCities(state.cities);
  };

  return (
    <>
      <div className="content-wrapper">
        <div className="container-xxl flex-grow-1 container-p-y">
          <div className="card mb-4">
            <div className="card-body">
              <h5>Registration Field</h5>
              <div className="demo-inline-spacing mt-3">
                <div className="card-body">
                  <form>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-default-name"
                      >
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          placeholder="Enter Full Name"
                          value={inputValue.fullName}
                          onChange={handleInputValue}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-default-name"
                      >
                        Email <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Enter Email"
                          value={inputValue.email}
                          onChange={handleInputValue}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-default-name"
                      >
                        DOB <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="date"
                          className="form-control"
                          name="dob"
                          placeholder="Select DOB"
                          value={inputValue.dob}
                          onChange={handleInputValue}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-default-name"
                      >
                        Gender <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="radio"
                          name="gender"
                          className="me-2"
                          value="male"
                          onChange={handleInputValue}
                          />
                          <label>Male</label>

                          <input
                          type="radio"
                          className="ms-3 me-2"
                          name="gender"
                          value="female"
                          onChange={handleInputValue}
                          />
                          <label>Female</label>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-default-name"
                      >
                        Mobile <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          name="mobile"
                          placeholder="Enter Mobile Number"
                          value={inputValue.mobile}
                          onChange={handleInputValue}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-default-name"
                      >
                        Address <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          placeholder="Enter Address"
                          value={inputValue.address}
                          onChange={handleInputValue}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-default-name"
                      >
                        Pincode <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-4">
                        <input
                          type="text"
                          className="form-control"
                          name="pincode"
                          placeholder="Enter Pincode"
                          value={inputValue.pincode}
                          onChange={handleInputValue}
                        />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-default-company"
                      >
                        State <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-4">
                        <select
                          id="defaultSelect"
                          className="form-select"
                          name="state"
                          onChange={(e) => handleFromState(e)}
                        >
                          <option>Select State</option>
                          {stateList &&
                            stateList.map((state, key) => (
                              <option
                                key={key}
                                title={state.code}
                                value={state.name}
                              >
                                {state.name}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        className="col-sm-2 col-form-label"
                        htmlFor="basic-default-company"
                      >
                        City <span className="text-danger">*</span>
                      </label>
                      <div className="col-sm-4">
                        <select
                          id="defaultSelect"
                          className="form-select"
                          name="city"
                          onChange={(e) => setCityValue(e.target.value)}
                        >
                          <option>Select City</option>
                          {fromCities &&
                            fromCities.map((city, key) => (
                              <option key={key} title="" value={city}>
                                {city}
                              </option>
                            ))}
                        </select>
                      </div>
                    </div>

                    <div className="row justify-content-end">
                      <div className="col-sm-10">
                        <button type="submit" className="btn btn-success">
                          Save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
