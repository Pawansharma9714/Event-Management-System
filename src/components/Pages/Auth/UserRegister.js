import React, { useState } from "react";
import moment from "moment";
import { Form } from "react-bootstrap";
import { registrationList, stateList } from "../../../utils/Constant";
import CheckedList from "../CustomField/CheckedList";

export default function UserRegister() {
  let eventList = JSON.parse(localStorage.getItem("eventDataList"));
  let register = JSON.parse(localStorage.getItem("register"));

  const [inputValue, setInputValue] = useState({});
  const [isChecked, setIsChecked] = useState("");
  const [fromState, setFromState] = useState("");

  const [cityValue, setCityValue] = useState("");
  const [fromCities, setFromCities] = useState([]);

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleRadioChecked = (e) => {
    setIsChecked(e.target.value);
  };

  const handleFromState = (e) => {
    const state = stateList.find((state) => state.name === e.target.value);
    setFromState(state.name);
    setFromCities(state.cities);
  };

  const btnRegister = (e) => {
    e.preventDefault();
    console.log("==register==");
    // inputValue.fromState = fromState; // state
    // inputValue.cityValue = cityValue; // city
    // inputValue.gender = isChecked; // radio
    
    console.log("inputValue==", inputValue);

    // localStorage.setItem(
    //   "register",
    //   JSON.stringify(
    //     register && register.length != 0
    //       ? register.concat([inputValue])
    //       : [inputValue]
    //   )
    // );
  };

  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="card mb-4">
          <div className="card-body">
            <h4 className="text-center fw-bold">Registration</h4>
            <div className="demo-inline-spacing mt-3">
              <div className="card-body">
                <Form>
                  {/*  */}
                  <div className="row justify-content-center mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-company"
                    >
                      Event Name
                    </label>
                    <div className="col-sm-4">
                      <select
                        id="defaultSelect"
                        className="form-select"
                        name="eventname"
                        onChange={handleInputValue}
                      >
                        <option>Select Event</option>
                        {eventList &&
                          eventList.map((event) => {
                            return (
                              event.eventList &&
                              event.eventList.map((data) => {
                                return (
                                  <option>
                                    {data.eventname +
                                      " " +
                                      "-" +
                                      " " +
                                      moment(data.startDate).format("Do") +
                                      " " +
                                      "to" +
                                      " " +
                                      moment(data.endDate).format("Do MMM")}
                                  </option>
                                );
                              })
                            );
                          })}
                      </select>
                    </div>
                  </div>

                  <CheckedList
                    eventList={eventList}
                    handleRadioChecked={handleRadioChecked}
                    handleFromState={handleFromState}
                    setCityValue={setCityValue}
                    fromCities={fromCities}
                    handleInputValue={handleInputValue}
                  />

                  <div className="row justify-content-center pt-3">
                    <div className="col-2">
                      <button
                        type="submit"
                        className="btn btn-info"
                        onClick={btnRegister}
                      >
                        Register
                      </button>
                    </div>
                  </div>

                  {/*  */}
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
