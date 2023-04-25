import React from "react";
import { stateList } from "../../../utils/Constant";

export default function CheckedList(props) {
  return (
    <>
      {props.eventList &&
        props.eventList.map((data) => {
          return (
            data.checkedList &&
            data.checkedList.map((item) => {
              return (
                <>
                  <div className="row justify-content-center mb-3">
                    <label
                      className="col-sm-2 col-form-label"
                      htmlFor="basic-default-name"
                    >
                      {item}
                    </label>
                    <div className="col-sm-4">
                      {item === "gender" ? (
                        <>
                          <input
                            type="radio"
                            className="me-2"
                            name={item}
                            value="male"
                            onChange={props.handleRadioChecked}
                          />
                          <label>Male</label>

                          <input
                            type="radio"
                            className="ms-3 me-2"
                            name={item}
                            value="female"
                            onChange={props.handleRadioChecked}
                          />
                          <label>Female</label>
                        </>
                      ) : item === "state" ? (
                        <select
                          id="defaultSelect"
                          className="form-select"
                          name="state"
                          onChange={(e) => props.handleFromState(e)}
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
                      ) : item === "city" ? (
                        <select
                          id="defaultSelect"
                          className="form-select"
                          name="city"
                          onChange={(e) => props.setCityValue(e.target.value)}
                        >
                          <option>Select City</option>
                          {props.fromCities &&
                            props.fromCities.map((city, key) => (
                              <option key={key} title="" value={city}>
                                {city}
                              </option>
                            ))}
                        </select>
                      ) : (
                        <input
                          type={item === "dob" ? "date" : "text"}
                          className="form-control"
                          name={item}
                          placeholder={`Enter ${item}`}
                          onChange={props.handleInputValue}
                        />
                      )}
                    </div>
                  </div>
                </>
              );
            })
          );
        })}
    </>
  );
}
