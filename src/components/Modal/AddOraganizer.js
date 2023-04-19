import React from 'react'

export default function AddOraganizer() {
  return (
    <>
        <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-sm" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel2">Modal title</h5>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameSmall" class="form-label">Name</label>
                                  <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameSmall" class="form-label">Contact No</label>
                                  <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameSmall" class="form-label">Address</label>
                                  <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameSmall" class="form-label">Email</label>
                                  <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameSmall" class="form-label">UserName</label>
                                  <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameSmall" class="form-label">Password</label>
                                  <input type="password" id="nameSmall" class="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameSmall" class="form-label">API Key</label>
                                  <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameSmall" class="form-label">Secreat Key</label>
                                  <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameSmall" class="form-label">SMS API Key</label>
                                  <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                  <label for="nameSmall" class="form-label">SMS Sender</label>
                                  <input type="text" id="nameSmall" class="form-control" placeholder="Enter Name" />
                                </div>
                              </div>

                              <div class="row">
                                <div class="col mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                              </div>

                              <div class="col-md">
                                    <small class="text-light fw-semibold d-block">Status</small>
                                    <div class="form-check form-check-inline mt-3">
                                        <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value="option1"
                                        />
                                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio2"
                                        value="option2"
                                        />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>

                                <div class="col-md">
                                    <small class="text-light fw-semibold d-block">Payment Integration</small>
                                    <div class="form-check form-check-inline mt-3">
                                        <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value="option1"
                                        />
                                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio2"
                                        value="option2"
                                        />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>

                                <div class="col-md">
                                    <small class="text-light fw-semibold d-block">Send Sms Permission</small>
                                    <div class="form-check form-check-inline mt-3">
                                        <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio1"
                                        value="option1"
                                        />
                                        <label class="form-check-label" for="inlineRadio1">Yes</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input
                                        class="form-check-input"
                                        type="radio"
                                        name="inlineRadioOptions"
                                        id="inlineRadio2"
                                        value="option2"
                                        />
                                        <label class="form-check-label" for="inlineRadio2">No</label>
                                    </div>
                                </div>
                             
                            </div>
                            <div class="modal-footer">
                              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                                Close
                              </button>
                              <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                          </div>
                        </div>                  
        </div>
    </>
  )
}
