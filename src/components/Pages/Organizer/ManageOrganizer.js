import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API, validEmail, ValidPassword } from "../../../utils/Config";
import { Button } from "react-bootstrap";
import axios from "axios";
import AddOraganizer from "../../Modal/AddOraganizer";
import NoDataFound from "../../../utils/NoDataFound";

export default function ManageOrganizer() {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([{ name: "s" }]);

  /* Modal Switch Value. */
  const [isStatusSwitchOn, setIsStatusSwitchOn] = useState(false);
  const [isPaymentSwitchOn, setIsPaymentSwitchOn] = useState(false);
  const [isSMSSwitchOn, setIsSMSSwitchOn] = useState(false);

  /* Modal Input Value. */
  const [inputValue, setInputValue] = useState({
    name: "",
    contactno: "",
    address: "",
    email: "",
    username: "",
    password: "",
    apiKey: "",
    secreatKey: "",
    smsAPIKey: "",
    smsSnder: "",
    smsTemplate: "",
  });

  /* Modal Input Onchange. */
  const handleInputValue = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  /* Modal Close Button. */
  const handleClose = () => setAdd(false);

  /* List Add Button. */
  const handleAdd = () => {
    setAdd(true);
    setEdit(false);
    setInputValue("");
    setIsStatusSwitchOn(false);
    setIsPaymentSwitchOn(false);
    setIsSMSSwitchOn(false);
  };
  /* List Edit Button. */
  const handleEdit = () => {
    setEdit(true);
    setAdd(true);
    setInputValue("");
    setIsStatusSwitchOn(false);
    setIsPaymentSwitchOn(false);
    setIsSMSSwitchOn(false);
  };

  /* Modal Switch Value Onchange. */
  const onStatusSwitchAction = () => {
    setIsStatusSwitchOn(!isStatusSwitchOn);
  };
  const onPaymentSwitchAction = () => {
    setIsPaymentSwitchOn(!isPaymentSwitchOn);
  };
  const onSMSSwitchAction = () => {
    setIsSMSSwitchOn(!isSMSSwitchOn);
  };

  /* Modal Add Button */
  const handleBtnAdd = async () => {
    if (!inputValue.name) {
      toast.error("Enter Name");
      return false;
    }
    if (!inputValue.contactno) {
      toast.error("Enter ContactNo");
      return false;
    }
    if (!inputValue.address) {
      toast.error("Enter Address");
      return false;
    }
    if (!inputValue.email) {
      toast.error("Enter Email");
      return false;
    }
    if (!validEmail(inputValue.email)) {
      toast.error("Enter Valid Email");
      return false;
    }
    if (!inputValue.username) {
      toast.error("Enter UserName");
      return false;
    }
    if (!inputValue.password) {
      toast.error("Enter Password");
      return false;
    }
    if (!inputValue.apiKey) {
      toast.error("Enter API Key");
      return false;
    }
    if (!inputValue.secreatKey) {
      toast.error("Enter Secreat Key");
      return false;
    }
    if (!inputValue.smsAPIKey) {
      toast.error("Enter SMS API Key");
      return false;
    }
    if (!inputValue.smsSnder) {
      toast.error("Enter SMS Sender");
      return false;
    }
    if (!inputValue.smsTemplate) {
      toast.error("Enter SMS Template");
      return false;
    }
    await axios
      .post(`${API}/Organizer/OrganizerSave`, {
        Name: inputValue.name,
        ContactNo: inputValue.contactno,
        Address: inputValue.address,
        UserName: inputValue.username,
        Password: inputValue.password,
        Email: inputValue.email,
        Status: isStatusSwitchOn,
        PaymentIntegration: isPaymentSwitchOn,
        APIkey: inputValue.apiKey,
        Secretkey: inputValue.secreatKey,
        IsSendSms: isSMSSwitchOn,
        SmsAPIKey: inputValue.smsAPIKey,
        SmsSender: inputValue.smsSnder,
        SMSTemplate: inputValue.smsTemplate,
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err===", err);
      });
  };

  /* Modal Update Button */
  const handleBtnUpdate = () => {
    console.log("===update===");
  };

  /* List */
  const fetchData = async () => {
    // console.log("list");
    // await axios
    //   .post(``)
    //   .then((res) => {
    //     console.log("res", res);
    //     // setData()
    //   })
    //   .catch((err) => {
    //     console.log("err===", err);
    //   });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4 d-flex align-items-center justify-content-between">
        <span className="">Manage / Oraganizer</span>
        <Button
          className="btn btn-primary w-px-100 m-1"
          variant="primary"
          onClick={handleAdd}
        >
          Add
        </Button>
      </h4>
      <div className="card">
        <AddOraganizer
          add={add}
          edit={edit}
          handleClose={handleClose}
          handleInputValue={handleInputValue}
          inputValue={inputValue}
          isStatusSwitchOn={isStatusSwitchOn}
          isPaymentSwitchOn={isPaymentSwitchOn}
          isSMSSwitchOn={isSMSSwitchOn}
          onStatusSwitchAction={onStatusSwitchAction}
          onPaymentSwitchAction={onPaymentSwitchAction}
          onSMSSwitchAction={onSMSSwitchAction}
          handleBtnAdd={handleBtnAdd}
          handleBtnUpdate={handleBtnUpdate}
        />

        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>Name</th>
                <th>Contact No</th>
                <th>Address</th>
                <th>Email</th>
                <th>UserName</th>
                <th>Password</th>
                <th>API Key</th>
                <th>Secreat Key</th>
                <th>SMS API Key</th>
                <th>SMS Sender</th>
                <th>SMS Template</th>
                <th>Status</th>
                <th>PaymentIntegration</th>
                <th>Send SMS Permission</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {data && data.length > 0 ? (
                <>
                  {data &&
                    data.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>
                            <div className="demo-inline-spacing">
                              <button
                                type="button"
                                className="btn btn-sm btn-success"
                                onClick={handleEdit}
                              >
                                <span className="tf-icons bx bx-edit"></span>
                                &nbsp; Edit
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-danger"
                              >
                                <span className="tf-icons bx bx-trash"></span>
                                &nbsp; Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </>
              ) : (
                <NoDataFound />
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
