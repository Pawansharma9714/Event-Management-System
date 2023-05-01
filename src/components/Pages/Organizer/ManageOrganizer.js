import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ADMIN_APIS, authDetails, validEmail } from "../../../utils/Config";
import { Button } from "react-bootstrap";
import axios from "axios";
import AddOraganizer from "../../Modals/AddOraganizer";
import ReactPaginate from "react-paginate";
import OrganizerTableList from "./OrganizerTableList";

export default function ManageOrganizer() {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [offset, setOffset] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [data, setData] = useState([]);

  const [organizerId, setOrganizerId] = useState("");

  const handlePageClick = (event) => {
    let selectedPage = event.selected;
    setOffset(selectedPage + 1);
    setCurrentPage(selectedPage);
  };

  /* Modal Input Value. */
  const [inputValue, setInputValue] = useState({
    name: "",
    contactno: "",
    address: "",
    email: "",
    username: "",
    password: "",
    apikey: "",
    secreatkey: "",
    smsapikey: "",
    smssender: "",
    smstemplate: "",
    status: false,
    paymentIntegration: false,
    isSendSms: false,
  });

  /* Modal Input Onchange. */
  const handleInputValue = (e) => {
    const { name } = e.target;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setInputValue({ ...inputValue, [name]: value });
  };

  /* Modal Close Button. */
  const handleClose = () => {
    setAdd(false);
    setInputValue("");
    setOrganizerId("");
  };

  /* List Add Button. */
  const handleAdd = () => {
    setAdd(true);
    setEdit(false);
    setOrganizerId("");
  };

  /* List Edit Button. */
  const handleEdit = (id) => {
    setEdit(true);
    setAdd(true);
    setOrganizerId(id);
  };

  /* Modal Add Button */
  const handleBtnAdd = async () => {
    if (!inputValue.name) {
      toast.dismiss();
      toast.error("Enter Name");
      return false;
    }
    if (!inputValue.contactno) {
      toast.dismiss();
      toast.error("Enter ContactNo");
      return false;
    }
    if (inputValue.contactno.length != 10) {
      toast.dismiss();
      toast.error("ContactNo must be 10 digit");
      return false;
    }
    if (!inputValue.address) {
      toast.dismiss();
      toast.error("Enter Address");
      return false;
    }
    if (!inputValue.email) {
      toast.dismiss();
      toast.error("Enter Email");
      return false;
    }
    if (!validEmail(inputValue.email)) {
      toast.dismiss();
      toast.error("Enter Valid Email");
      return false;
    }
    if (!inputValue.username) {
      toast.dismiss();
      toast.error("Enter UserName");
      return false;
    }
    if (!inputValue.password) {
      toast.dismiss();
      toast.error("Enter Password");
      return false;
    }
    if (!inputValue.apikey) {
      toast.dismiss();
      toast.error("Enter API Key");
      return false;
    }
    if (!inputValue.secreatkey) {
      toast.dismiss();
      toast.error("Enter Secreat Key");
      return false;
    }
    if (!inputValue.smsapikey) {
      toast.dismiss();
      toast.error("Enter SMS API Key");
      return false;
    }
    if (!inputValue.smssender) {
      toast.dismiss();
      toast.error("Enter SMS Sender");
      return false;
    }
    if (!inputValue.smstemplate) {
      toast.dismiss();
      toast.error("Enter SMS Template");
      return false;
    }
    await axios
      .post(`${ADMIN_APIS.ORGANIZER.ADD}`, {
        headers: {
          authorization: `${authDetails.token}`,
        },
        name: inputValue.name,
        contactno: inputValue.contactno,
        address: inputValue.address,
        email: inputValue.email,
        username: inputValue.username,
        password: inputValue.password,
        apikey: inputValue.apikey,
        secreatkey: inputValue.secreatkey,
        smsapikey: inputValue.smsapikey,
        smssender: inputValue.smssender,
        smstemplate: inputValue.smstemplate,
        status: inputValue.status,
        paymentIntegration: inputValue.paymentIntegration,
        isSendSms: inputValue.isSendSms,
      })
      .then((res) => {
        if (res.data.status) {
          setAdd(false);
          fetchData();
          toast.dismiss();
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.response.data.message);
      });
  };

  /* Modal Update Button */
  const handleBtnUpdate = async () => {
    if (!inputValue.name) {
      toast.dismiss();
      toast.error("Enter Name");
      return false;
    }
    if (!inputValue.contactno) {
      toast.dismiss();
      toast.error("Enter ContactNo");
      return false;
    }
    if (!inputValue.address) {
      toast.dismiss();
      toast.error("Enter Address");
      return false;
    }
    if (!inputValue.email) {
      toast.dismiss();
      toast.error("Enter Email");
      return false;
    }
    if (!validEmail(inputValue.email)) {
      toast.dismiss();
      toast.error("Enter Valid Email");
      return false;
    }
    if (!inputValue.username) {
      toast.dismiss();
      toast.error("Enter UserName");
      return false;
    }
    if (!inputValue.password) {
      toast.dismiss();
      toast.error("Enter Password");
      return false;
    }
    if (!inputValue.apikey) {
      toast.dismiss();
      toast.error("Enter API Key");
      return false;
    }
    if (!inputValue.secreatkey) {
      toast.dismiss();
      toast.error("Enter Secreat Key");
      return false;
    }
    if (!inputValue.smsapikey) {
      toast.dismiss();
      toast.error("Enter SMS API Key");
      return false;
    }
    if (!inputValue.smssender) {
      toast.dismiss();
      toast.error("Enter SMS Sender");
      return false;
    }
    if (!inputValue.smstemplate) {
      toast.dismiss();
      toast.error("Enter SMS Template");
      return false;
    }
    await axios
      .post(`${ADMIN_APIS.ORGANIZER.UPDATE}/${organizerId}`, {
        headers: {
          authorization: `${authDetails.token}`,
        },
        name: inputValue.name,
        contactno: inputValue.contactno,
        address: inputValue.address,
        email: inputValue.email,
        username: inputValue.username,
        password: inputValue.password,
        apikey: inputValue.apikey,
        secreatkey: inputValue.secreatkey,
        smsapikey: inputValue.smsapikey,
        smssender: inputValue.smssender,
        smstemplate: inputValue.smstemplate,
        status: inputValue.status,
        paymentIntegration: inputValue.paymentIntegration,
        isSendSms: inputValue.isSendSms,
      })
      .then((res) => {
        if (res.data.status) {
          setAdd(false);
          setEdit(false);
          fetchData();
          toast.dismiss();
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.response.data.message);
      });
  };

  /* List Delete Button */
  const handleDeleteOrganizer = async (id) => {
    await axios
      .delete(`${ADMIN_APIS.ORGANIZER.DELETE}/${id}`, {
        headers: {
          authorization: `${authDetails.token}`,
        },
      })
      .then((res) => {
        if (res.data.status) {
          fetchData();
          toast.dismiss();
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.response.data.message);
      });
  };

  /* List */
  const fetchData = async () => {
    await axios
      .post(`${ADMIN_APIS.ORGANIZER.LIST}?per_page=5&page_no=${offset}`, {
        headers: {
          authorization: `${authDetails.token}`,
        },
      })
      .then((res) => {
        if (res.data.status) {
          setData(res.data.data);
          setPageCount(res.data.totalPageCount);
        }
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.response.data.message);
      });
  };

  /* Edit Organizer Details. */
  const OraganizerDetails = async () => {
    await axios
      .post(`${ADMIN_APIS.ORGANIZER.EDIT}/${organizerId}`, {
        headers: {
          authorization: `${authDetails.token}`,
        },
      })
      .then((res) => {
        if (res.data.status) {
          setInputValue(res.data.data);
        }
      })
      .catch((err) => {
        toast.dismiss();
        toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    fetchData();

    if (organizerId) {
      OraganizerDetails();
    }
  }, [offset, organizerId]);

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
          inputValue={inputValue}
          handleInputValue={handleInputValue}
          handleBtnAdd={handleBtnAdd}
          handleBtnUpdate={handleBtnUpdate}
        />

        <OrganizerTableList
          data={data}
          handleEdit={handleEdit}
          handleDeleteOrganizer={handleDeleteOrganizer}
        />
      </div>
      <div className="mt-3">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-end"}
          activeClassName="active"
          pageLinkClassName="page-link"
          nextLinkClassName="page-link bg-label-dark"
          previousLinkClassName="page-link bg-label-dark"
          pageClassName="page-item"
          breakClassName="page-item"
          nextClassName="page-item text-black"
          previousClassName="page-item"
          forcePage={currentPage}
        />
      </div>
    </div>
  );
}
