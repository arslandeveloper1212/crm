import React, { useEffect } from 'react';
import '../../src/App.css';

const CreateCustomer = () => {
  
  useEffect(() => {
    initializeDragAndDrop("dragArea1", "fileInput1", "fileList1", "browseFilesBtn1");
    initializeDragAndDrop("dragArea2", "fileInput2", "fileList2", "browseFilesBtn2");
  }, []);

  function initializeDragAndDrop(dragAreaId, fileInputId, fileListId, browseFilesBtnId) {
    const dragArea = document.getElementById(dragAreaId);
    const fileInput = document.getElementById(fileInputId);
    const fileList = document.getElementById(fileListId);
    const browseFilesBtn = document.getElementById(browseFilesBtnId);

    dragArea.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dragArea.classList.add('drag-over');
    });

    dragArea.addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dragArea.classList.remove('drag-over');
    });

    dragArea.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      dragArea.classList.remove('drag-over');
      const files = e.dataTransfer.files;
      handleFiles(files, fileList);
    });

    browseFilesBtn.addEventListener('click', () => {
      fileInput.click();
    });

    fileInput.addEventListener('change', () => {
      const files = fileInput.files;
      handleFiles(files, fileList);
    });

    function handleFiles(files, fileList) {
      fileList.innerHTML = ''; // Clear previous files
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const listItem = document.createElement('p');
        listItem.textContent = file.name;
        fileList.appendChild(listItem);
      }
    }
  }

  return (
    <div>
      <div className="col-lg-12 col-md-12 col-12">
        <div className="control-overwidth padding-given">
          <form>
            <div className="container">
              <div className="row justify-content-between d-flex">
                <h1 className='main-heading'>Create Customer</h1>
                <span>add new customer</span>
                <div className="col-md-6 col-lg-6 col-12 py-4">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label heading-color">Name</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label heading-color">Email </label>
                    <input type="email" className="form-control" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <span>Requirements</span>
                    <div>
                      <button className='button-padding'>Inpatient</button>
                      <button className='button-padding'>Outpatient</button>
                      <button className='button-padding'>Dental</button>
                      <button className='button-padding'>Maternity</button>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label heading-color">Address </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nationality" className="form-label heading-color">Nationality </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <div className="drag-area" id="dragArea1">
                      <h3 id="browseFilesBtn1">Drop files to upload</h3>
                      <input type="file" id="fileInput1" multiple style={{ display: "none" }} />
                    </div>
                    <div id="fileList1" className="mt-3"></div>
                  </div>
                  <div className="row">
                    <div className="mb-3">
                      <label htmlFor="policy" className="form-label heading-color">Policy</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="insurance" className="form-label heading-color">Insurer</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <div className="alert alert-primary">
                        <label htmlFor="currency" className="form-label heading-color">Currency:</label>
                        <select id="currency" className="form-control">
                          <option value="$">$ USD</option>
                          <option value="£">£ Pound</option>
                          <option value="€">€ Euro</option>
                          <option value="₹">₹ Rupee</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="premiumFrequency" className="form-label heading-color">Premium Frequency</label>
                      <input type="text" className="form-control" id="premiumFrequency" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="premiumAmount" className="form-label heading-color">Premium Amount</label>
                      <input type="text" className="form-control" id="premiumAmount" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12">
                  <div className="justify-content-center">
                    <img src="https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png"
                      className="img-fluid w-30%" style={{ display: "flex", margin: "auto" }} alt="Profile" />
                  </div>
                  <div className="mb-3">
                    <input type="file" className="form-control" />
                  </div>
                  <div className="row" style={{ marginTop: "180px" }}>
                    <div className="container mt-5">
                      <div className="mb-3">
                        <div className="form-group">
                          <label htmlFor="startDate" className="heading-color">Start Date</label>
                          <input type="date" className="form-control datepicker" id="startDate"
                            placeholder="Select start date" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <div className="form-group">
                          <label htmlFor="endDate" className="heading-color">End Date</label>
                          <input type="date" className="form-control datepicker" id="endDate"
                            placeholder="Select end date" />
                        </div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="drag-area" id="dragArea2">
                        <h3 id="browseFilesBtn2">Drop files to upload</h3>
                        <input type="file" id="fileInput2" multiple style={{ display: "none" }} />
                      </div>
                      <div id="fileList2" className="mt-3"></div>
                    </div>
                  </div>
                </div>
              </div>
              <button className='col-12' style={{ margin: "20px 0px", padding: "8px 16px", borderRadius: "15px", border: "none" }}>Add More Policy</button>
              <button className='btn-grey' style={{ margin: "30px 0px" }}>Save Profile</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCustomer;
