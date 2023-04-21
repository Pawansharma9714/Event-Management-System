import React, { useEffect, useState } from "react";
import { ADMIN_APIS } from "../../../utils/Config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "../../../utils/Loader";

export default function OraganizerLogin() {
  let eventAuth = localStorage.getItem("EventAuth");

  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState(false);
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const togglePassword = () => {
    setPasswordType(!passwordType);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!inputValue.username) {
      toast.dismiss();
      toast.error("Enter Username");
      return false;
    }
    if (!inputValue.password) {
      toast.dismiss();
      toast.error("Enter Password");
      return false;
    }
    localStorage.setItem("EventAuth", true);
    navigate("/organizer/dashboard");

    // await axios
    //   .post(`${ADMIN_APIS.AUTH.ORGANIZER_LOGIN}`, {
    //     UserName: inputValue.username,
    //     Pasword: inputValue.password,
    //   })
    //   .then((res) => {
    //     if (res.data.success) {
    //       setInputValue("");
    //       localStorage.setItem("EventAuth", true);
    //       navigate("/organizer/dashboard");
    //     } else {
    //       toast.dismiss();
    //       toast.error("Invalid Credentials");
    //     }
    //   })
    //   .catch((err) => {
    //     toast.dismiss();
    //     toast.error(err.message);
    //   });
  };

  useEffect(() => {
    if (eventAuth) {
      navigate("/organizer/dashboard");
    }
  }, []);

  return (
    <>
      {!eventAuth ? (
        <div className="container-xxl">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
              <div className="card">
                <div className="card-body">
                  <div className="app-brand justify-content-center">
                    <a className="app-brand-link gap-2">
                      <span className="app-brand-text demo text-body fw-bolder mb-4">
                        Oraganizer Login
                      </span>
                    </a>
                  </div>

                  <form id="formAuthentication" className="mb-3">
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter username"
                        autoFocus
                        value={inputValue.username}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">
                          Password
                        </label>
                      </div>
                      <div className="input-group input-group-merge">
                        <input
                          type={passwordType ? "text" : "password"}
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="Enter Password"
                          aria-describedby="password"
                          value={inputValue.password}
                          onChange={handleChange}
                        />
                        <span
                          className="input-group-text cursor-pointer"
                          onClick={togglePassword}
                        >
                          {passwordType ? (
                            <i className="bx bx-show"></i>
                          ) : (
                            <i className="bx bx-hide"></i>
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="mb-3">
                      <button
                        className="btn btn-primary d-grid w-100"
                        type="submit"
                        onClick={handleLogin}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
}
