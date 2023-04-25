import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import NoDataFound from "../../../utils/NoDataFound";
import { ADMIN_APIS } from "../../../utils/Config";
import { toast } from "react-toastify";
import axios from "axios";
import AddEvent from "../../Modals/AddEvent";

export default function ManageEvent() {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState([{ name: "" }]);
  let eventList = JSON.parse(localStorage.getItem("eventDataList"));

  const [addGroupList, setAddGroupList] = useState(true);
  const [customGroupList, setCustomGroupList] = useState(false);

  const [checkedList, setCheckedList] = useState([]);

  /* Modal Switch Value. */
  const [isEventSwitchOn, setIsEventSwitchOn] = useState(false);

  /* Modal Input Value. */
  const [inputValue, setInputValue] = useState({
    eventname: "",
    description: "",
    startDate: "",
    endDate: "",
    location: "",
    city: "",
    organizerName: "",
    fees: "",
    feeDescription: "",
  });

  /* Modal Input Onchange. */
  const handleInputValue = async (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  /* Modal Close Button. */
  const handleClose = () => {
    setAdd(false);
    setAddGroupList(true);
    setCustomGroupList(false);
    setCheckedList([]);
  };

  /* List Add Button. */
  const handleAdd = () => {
    setAdd(true);
    setEdit(false);
    setInputValue("");
    setIsEventSwitchOn(false);
  };

  /* List Edit Button. */
  const handleEdit = () => {
    setEdit(true);
    setAdd(true);
    setInputValue("");
    setIsEventSwitchOn(false);
  };

  /* Modal Switch Value Onchange. */
  const onEventSwitchAction = () => {
    setIsEventSwitchOn(!isEventSwitchOn);
  };

  /* Modal Checkbox Onchange. */
  const handleCheck = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setCheckedList([...checkedList, value]);
    } else {
      const filteredList = checkedList.filter((item) => item !== value);
      setCheckedList(filteredList);
    }
  };

  const groupAddEvent = () => {
    setAddGroupList(true);
    setCustomGroupList(false);
  };
  const groupCustomEvent = () => {
    setAddGroupList(false);
    setCustomGroupList(true);
  };

  /* Modal Add Button */
  const handleBtnAdd = async () => {
    console.log("==Add Event==");
    let dataList = {
      eventname: inputValue.eventname,
      description: inputValue.description,
      startDate: inputValue.startDate,
      endDate: inputValue.endDate,
      location: inputValue.location,
      city: inputValue.city,
      organizerName: inputValue.organizerName,
      fees: inputValue.fees,
      feeDescription: inputValue.feeDescription,
      hideOtherField: isEventSwitchOn,
    };
    let eventDataList = [{eventList:dataList, checkedList:checkedList}];
    localStorage.setItem("eventDataList", JSON.stringify(eventDataList));

    // if (!inputValue.eventname) {
    //   toast.dismiss();
    //   toast.error("Enter Event Name");
    //   return false;
    // }
    // if (!inputValue.description) {
    //   toast.dismiss();
    //   toast.error("Enter Description");
    //   return false;
    // }
    // if (!inputValue.startDate) {
    //   toast.dismiss();
    //   toast.error("Select StartDate");
    //   return false;
    // }
    // if (!inputValue.endDate) {
    //   toast.dismiss();
    //   toast.error("Select End Date");
    //   return false;
    // }
    // if (!inputValue.location) {
    //   toast.dismiss();
    //   toast.error("Enter Location");
    //   return false;
    // }
    // if (!inputValue.city) {
    //   toast.dismiss();
    //   toast.error("Enter City");
    //   return false;
    // }
    // if (!inputValue.organizerName) {
    //   toast.dismiss();
    //   toast.error("Enter Organizer Name");
    //   return false;
    // }
    // if (!inputValue.fees) {
    //   toast.dismiss();
    //   toast.error("Enter Fees");
    //   return false;
    // }
    // if (!inputValue.feeDescription) {
    //   toast.dismiss();
    //   toast.error("Enter Fees Description");
    //   return false;
    // }

    // await axios
    //   .post(`${ADMIN_APIS.EVENT.ADD}`, {
    //     eventname: inputValue.eventname,
    //     description: inputValue.description,
    //     startDate: inputValue.startDate,
    //     endDate: inputValue.endDate,
    //     location: inputValue.location,
    //     city: inputValue.city,
    //     organizerName: inputValue.organizerName,
    //     fees: inputValue.fees,
    //     feeDescription: inputValue.feeDescription,
    //     hideOtherField: isEventSwitchOn,
    //   })
    //   .then((res) => {
    //     console.log("res", res);
    //     setAddGroupList(true);
    //     setCustomGroupList(false);
    //   })
    //   .catch((err) => {
    //     console.log("err===", err);
    //   });
  };

  /* Modal AddCustomField Button */
  const handleAddCustomField = () => {
    console.log("custom--field");
  };

  /* Modal Update Button */
  const handleBtnUpdate = () => {
    console.log("===update===");
  };

  /* Modal UpdateCustomField Button */
  const handleUpdateCustomField = () => {
    console.log("===updateCustom===");
    console.log("checkedList2==", checkedList);
  };

  /* List */
  const fetchData = async () => {
    await axios
      .get(`${ADMIN_APIS.EVENT.LIST}`)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err===", err);
      });
  };

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4 d-flex align-items-center justify-content-between">
        <span className="">Manage / Event</span>
        <Button
          className="btn btn-primary w-px-100 m-1"
          variant="primary"
          onClick={handleAdd}
        >
          Add
        </Button>
      </h4>
      <div className="card">
        <AddEvent
          add={add}
          edit={edit}
          handleClose={handleClose}
          inputValue={inputValue}
          handleInputValue={handleInputValue}
          isEventSwitchOn={isEventSwitchOn}
          onEventSwitchAction={onEventSwitchAction}
          handleCheck={handleCheck}
          addGroupList={addGroupList}
          customGroupList={customGroupList}
          groupAddEvent={groupAddEvent}
          groupCustomEvent={groupCustomEvent}
          handleBtnAdd={handleBtnAdd}
          handleBtnUpdate={handleBtnUpdate}
          handleAddCustomField={handleAddCustomField}
          handleUpdateCustomField={handleUpdateCustomField}
          // 
          eventList={eventList}
        />

        <div className="table-responsive text-nowrap">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th>Event Name</th>
                <th>Description</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Location</th>
                <th>City</th>
                <th>Organizer Name</th>
                <th>Registration Link</th>
                <th>QR Code</th>
                <th>User Link</th>
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
