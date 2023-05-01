import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ADMIN_APIS, authDetails } from "../../../utils/Config";

export default function AdminProfile() {
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState(false);
  const [newPassword, setNewPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);

  const [inputValue, setInputValue] = useState({
    oldpassword: "",
    newpassword: "",
    confirmpassword: "",
  });

  const oldPasswordToggle = () => {
    setOldPassword(!oldPassword);
  };
  const newPasswordToggle = () => {
    setNewPassword(!newPassword);
  };
  const confirmPasswordToggle = () => {
    setConfirmPassword(!confirmPassword);
  };

  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const btnChangePassword = async (e) => {
    e.preventDefault();

    if (!inputValue.oldpassword) {
      toast.dismiss();
      toast.error("Enter Old Password");
      return false;
    }
    if (!inputValue.newpassword) {
      toast.dismiss();
      toast.error("Enter New Password");
      return false;
    }
    if (!inputValue.confirmpassword) {
      toast.dismiss();
      toast.error("Enter Confirm Password");
      return false;
    }
    if (inputValue.newpassword != inputValue.confirmpassword) {
      toast.dismiss();
      toast.error("New Password & Old Password must be same");
      return false;
    }

    await axios
      .post(`${ADMIN_APIS.AUTH.CHANGE_PASSWORD}`, {
        headers: {
          authorization: `${authDetails.token}`,
        },
        username: `${authDetails.username}`,
        oldpassword: inputValue.oldpassword,
        newpassword: inputValue.newpassword,
        confirmpassword: inputValue.confirmpassword,
      })
      .then((res) => {
        if (res.data.status) {
          navigate("/");
          localStorage.removeItem("Auth");
          toast.dismiss();
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.response.data.message);
      });
  };
  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4">
          <span>Manage Account</span>
        </h4>
        <div className="row">
          <div className="col-md-12">
            <div className="card mb-4">
              <h5 className="card-header">
                <i className="bx bx-lock me-1"></i> Change Password
              </h5>
              <hr className="my-0" />
              <div className="card-body">
                <form>
                  <div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="oldpassword" className="form-label">
                        Old Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          className="form-control"
                          type={oldPassword ? "text" : "password"}
                          id="oldpassword"
                          name="oldpassword"
                          placeholder="Enter Old Password"
                          value={inputValue.oldpassword}
                          onChange={handleInputValue}
                        />
                        <span
                          className="input-group-text cursor-pointer"
                          onClick={oldPasswordToggle}
                        >
                          {oldPassword ? (
                            <i className="bx bx-show"></i>
                          ) : (
                            <i className="bx bx-hide"></i>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="newpassword" className="form-label">
                        New Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          className="form-control"
                          type={newPassword ? "text" : "password"}
                          id="newpassword"
                          name="newpassword"
                          placeholder="Enter New Password"
                          value={inputValue.newpassword}
                          onChange={handleInputValue}
                        />
                        <span
                          className="input-group-text cursor-pointer"
                          onClick={newPasswordToggle}
                        >
                          {newPassword ? (
                            <i className="bx bx-show"></i>
                          ) : (
                            <i className="bx bx-hide"></i>
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="mb-3 col-md-6">
                      <label htmlFor="confirmpassword" className="form-label">
                        Confirm Password
                      </label>
                      <div className="input-group input-group-merge">
                        <input
                          className="form-control"
                          type={confirmPassword ? "text" : "password"}
                          id="confirmpassword"
                          name="confirmpassword"
                          placeholder="Enter Confirm Password"
                          value={inputValue.confirmpassword}
                          onChange={handleInputValue}
                        />
                        <span
                          className="input-group-text cursor-pointer"
                          onClick={confirmPasswordToggle}
                        >
                          {confirmPassword ? (
                            <i className="bx bx-show"></i>
                          ) : (
                            <i className="bx bx-hide"></i>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <button
                      className="btn btn-primary me-2"
                      onClick={btnChangePassword}
                    >
                      Change Password
                    </button>
                    <button type="reset" className="btn btn-outline-secondary">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
