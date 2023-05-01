import React from 'react'
import NoDataFound from '../../../utils/NoDataFound';

export default function OrganizerTableList(props) {
  return (
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
                <th>Payment Integration</th>
                <th>Send SMS Permission</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="table-border-bottom-0">
              {props.data && props.data.length > 0 ? (
                <>
                  {props.data &&
                    props.data.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>{item.name}</td>
                          <td>{item.contactno}</td>
                          <td>{item.address}</td>
                          <td>{item.email}</td>
                          <td>{item.username}</td>
                          <td>{`${
                            item.password.length > 5
                              ? item.password.substring(0, 8) + "..."
                              : item.password
                          }`}</td>
                          <td>{item.apikey}</td>
                          <td>{item.secreatkey}</td>
                          <td>{item.smsapikey}</td>
                          <td>{item.smssender}</td>
                          <td>{item.smstemplate}</td>
                          <td>{item.status ? "true" : "false"}</td>
                          <td>
                            {item.paymentIntegration ? "true" : "false"}
                          </td>
                          <td>{item.isSendSms ? "true" : "false"}</td>
                          <td>
                            <div className="demo-inline-spacing">
                              <button
                                type="button"
                                className="btn btn-sm btn-success"
                                onClick={() => props.handleEdit(item._id)}
                              >
                                <span className="tf-icons bx bx-edit"></span>
                                &nbsp; Edit
                              </button>
                              <button
                                type="button"
                                className="btn btn-sm btn-danger"
                                onClick={() => props.handleDeleteOrganizer(item._id)}
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
  )
}
