import moment from "moment";
import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { FORM_TYPE } from "../../utils/Constant";

export default function AddEvent(props) {
  const list = localStorage.getItem("customField")
    ? JSON.parse(localStorage.getItem("customField"))
    : [];

  return (
    <>
      <Modal
        show={props.add}
        onHide={props.handleClose}
        scrollable={true}
        size="md"
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-info text-uppercase">
            {props.edit ? "Edit Event" : "Add Event"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.EventName">
                  <Form.Label>
                    Event Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="eventname"
                    placeholder="Enter Event Name"
                    value={props.inputValue.eventname}
                    onChange={props.handleInputValue}
                    autoFocus
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.Description"
                >
                  <Form.Label>
                    Description <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="description"
                    placeholder="Enter Description"
                    value={props.inputValue.description}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.StartDate">
                  <Form.Label>
                    Start Date <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="startDate"
                    placeholder="Select startDate"
                    value={props.inputValue.startDate}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.EndDate">
                  <Form.Label>
                    End Date <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="date"
                    name="endDate"
                    placeholder="Select endDate"
                    min={moment(props.inputValue.startDate).format(
                      "YYYY-MM-DD"
                    )}
                    value={props.inputValue.endDate}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.Location">
                  <Form.Label>
                    Location <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="location"
                    placeholder="Enter Location"
                    value={props.inputValue.location}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.City">
                  <Form.Label>
                    City <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={props.inputValue.city}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.OrganizerName"
                >
                  <Form.Label>
                    Organizer Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="organizerName"
                    placeholder="Enter Organizer Name"
                    value={props.inputValue.organizerName}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.Fees">
                  <Form.Label>
                    Fees <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="fees"
                    placeholder="Enter Fees"
                    value={props.inputValue.fees}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.FeesDescription"
            >
              <Form.Label>
                Fees Description <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                name="feeDescription"
                placeholder="Enter Fees Description"
                value={props.inputValue.feeDescription}
                onChange={props.handleInputValue}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.HideOtherField">
              {/* <Form.Label>HideOtherField</Form.Label> */}
              <Form.Check
                type="switch"
                id="custom-switch"
                name="hideOtherField"
                label="Hide Other Field"
                value={props.isEventSwitchOn}
                checked={props.isEventSwitchOn ? true : false}
                onChange={props.onEventSwitchAction}
              />
            </Form.Group>

            {/* {list &&
              list.map((item, key) => {
                return (
                  <div key={key}>
                    {item.dataType == FORM_TYPE.TEXTBOX && (
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.Description"
                      >
                        <Form.Label>
                          {item.labelName}{" "}
                          {item.isMandatory && (
                            <span className="text-danger">*</span>
                          )}
                        </Form.Label>
                        <Form.Control
                          type="text"
                          name={item.labelName}
                          placeholder={`Enter ${item.labelName}`}
                          onChange={(e) =>
                            props.handleInputValue(
                              e,
                              item.labelName,
                              item.fid,
                              item.isMandatory
                            )
                          }
                        />
                      </Form.Group>
                    )}

                    {item.dataType == FORM_TYPE.NUMBER && (
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.Description"
                      >
                        <Form.Label>
                          {item.labelName}{" "}
                          {item.isMandatory && (
                            <span className="text-danger">*</span>
                          )}
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name={item.labelName}
                          placeholder={`Enter ${item.labelName}`}
                          value={props.inputValue.description}
                          onChange={(e) =>
                            props.handleInputValue(
                              e,
                              item.labelName,
                              item.fid,
                              item.isMandatory
                            )
                          }
                        />
                      </Form.Group>
                    )}
                  </div>
                );
              })} */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          {props.edit ? (
            <Button variant="primary" onClick={props.handleBtnUpdate}>
              UPDATE
            </Button>
          ) : (
            <Button variant="primary" onClick={props.handleBtnAdd}>
              ADD
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}
