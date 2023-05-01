import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

export default function AddOraganizer(props) {
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
            {props.edit ? "Edit" : "Add"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.Name">
                  <Form.Label>
                    Name <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={props.inputValue.name}
                    onChange={props.handleInputValue}
                    autoFocus
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.ContactNo">
                  <Form.Label>
                    Contact No <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="contactno"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    placeholder="Enter Contact No"
                    value={props.inputValue.contactno}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.Address">
                  <Form.Label>
                    Address <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    value={props.inputValue.address}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    Email <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={props.inputValue.email}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.UserName">
                  <Form.Label>
                    UserName <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter UserName"
                    value={props.inputValue.username}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.Password">
                  <Form.Label>
                    Password <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={props.inputValue.password}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.API Key">
                  <Form.Label>
                    API Key <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="apikey"
                    placeholder="Enter API Key"
                    value={props.inputValue.apikey}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.Secreat Key"
                >
                  <Form.Label>
                    Secreat Key <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="secreatkey"
                    placeholder="Enter Secreat Key"
                    value={props.inputValue.secreatkey}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.SMS API Key"
                >
                  <Form.Label>
                    SMS API Key <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="smsapikey"
                    placeholder="Enter SMS API Key"
                    value={props.inputValue.smsapikey}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="exampleForm.SMS Sender">
                  <Form.Label>
                    SMS Sender <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="smssender"
                    placeholder="Enter SMS Sender"
                    value={props.inputValue.smssender}
                    onChange={props.handleInputValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                SMS Template <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                name="smstemplate"
                rows={3}
                placeholder="Enter SMS Template"
                value={props.inputValue.smstemplate}
                onChange={props.handleInputValue}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.Status">
              <Form.Check
                type="switch"
                id="custom-switch"
                name="status"
                label="Status"
                value={props.inputValue.status}
                checked={props.inputValue.status}
                onChange={props.handleInputValue}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.PaymentIntegration"
            >
              <Form.Check
                type="switch"
                name="paymentIntegration"
                label="Payment Integration"
                value={props.inputValue.paymentIntegration}
                checked={props.inputValue.paymentIntegration}
                onChange={props.handleInputValue}
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.SendSmsPermission"
            >
              <Form.Check
                type="switch"
                name="isSendSms"
                label="Send Sms Permission"
                value={props.inputValue.isSendSms}
                checked={props.inputValue.isSendSms}
                onChange={props.handleInputValue}
              />
            </Form.Group>
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
