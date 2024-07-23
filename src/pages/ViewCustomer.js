import React, { useState } from 'react';
import '../../src/App.css';
import { PiDownloadSimple } from "react-icons/pi";


const BUTTONS = [
    { id: 1, title: 'Inpatient', selected: false },
    { id: 2, title: 'Outpatient', selected: false },
    { id: 3, title: 'Dental', selected: false },
    { id: 4, title: 'Maternity', selected: false },
];

const ViewCustomer = () => {


    const [buttons, setButtons] = useState(BUTTONS);
    console.log(buttons)

    const handleButton = (buttonId, e) => {
        e.preventDefault(); // Prevent default form submission behavior
        const newButtons = buttons.map((btn) => {
            if (btn.id !== buttonId) return btn;
            return { ...btn, selected: !btn.selected }; // Create a new object with updated selected value
        });
        setButtons(newButtons);
    };








    return (

        <div className='full-width-screen padding-given'>
            <h1 className='main-heading'>Customer Details</h1>
            <span>Manage Client Data</span>

            <div className='mt-5'>
                <div className='container'>
                    <div className='row d-flex'>
                        <div className='col-lg-4 col-md-4 col-12'>
                            <div className='flex-row d-flex'>
                                <img style={{ width: "80px" }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxOX4mkcW8pH9FbpI9rTBkokiMxSY2GJ3eyw&s' className='img-fluid' />
                                <div className='flex-column d-flex px-3'>
                                    <span>Name</span>
                                    <span>Test@gmail.com</span>
                                    <span>+923474452235</span>
                                </div>
                            </div>

                        </div>
                        <div className='col-lg col-md col-12'>
                            <div className='flex-column d-flex px-3'>
                                <span>Nationality</span>
                                <span>Thai</span>

                            </div>
                        </div>
                        <div className='col-lg col-md col-12'>
                            <div className='flex-column d-flex px-3'>
                                <span>Date Of Birth</span>
                                <span>08/08/2024</span>

                            </div>
                        </div>
                        <div className='col-lg col-md col-12'>
                            <div className='flex-column d-flex px-3'>
                                <span>Sex</span>
                                <span>Male</span>

                            </div>
                        </div>
                        <div className='col-lg col-md col-12'>
                            <div className='flex-column d-flex px-3'>
                                <span>Country</span>
                                <span>Thailand</span>

                            </div>
                        </div>

                        <div className='col-lg col-md col-12'>
                            <div className='flex-column d-flex px-3'>
                                <span>Address</span>
                                <span>House No 112, San Fransico</span>

                            </div>
                        </div>
                    </div>
                    <hr style={{ color: "grey" }} />
                    <div className='row'>
                        <div className='row d-flex'>
                            <div className='col-lg-4 col-md-4 col-12'>
                                <div className='flex-row d-flex'>

                                    <div className='flex-column d-flex '>
                                        <div className="mb-3">
                                            <span className='str-bold-h'>Plan Modules</span>

                                            <div >
                                                {buttons.map((bt) => (
                                                    <button
                                                        key={bt.id}
                                                        onClick={(e) => handleButton(bt.id, e)}
                                                        className={bt.selected ? 'buttonPressed' : 'button-padding'}
                                                    >
                                                        {bt.title}
                                                    </button>

                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg col-md col-12'>
                                <span>Documents</span>
                                <div className='flex-row d-flex' style={{ margin: "10px 0px" }}>
                                    <div className='flex-column px-3'>
                                        <div className='flex-row'>
                                            <div>
                                                <span>Verified ID</span>
                                                <PiDownloadSimple />
                                            </div>

                                            <div className='py-3'>
                                                <span>Proof Of Address</span>
                                                <PiDownloadSimple />
                                            </div>

                                        </div>


                                    </div>

                                    <div className='flex-column d-flex px-3'>
                                        <div className='flex-row'>
                                            <div>
                                                <span>Policy Document</span>
                                                <PiDownloadSimple />
                                            </div>

                                            <div className='py-3'>
                                                <span>Invoice</span>
                                                <PiDownloadSimple />
                                            </div>

                                        </div>


                                    </div>

                                    <div className='flex-column d-flex px-3'>
                                        <div className='flex-row'>
                                            <div>
                                                <span>Other Document</span>
                                                <PiDownloadSimple />
                                            </div>



                                        </div>


                                    </div>
                                </div>

                            </div>





                        </div>
                    </div>

                    <div className='row d-flex'>
                        <div className='col-12'>
                            <span className='str-bold-h'>Policy Detail</span>
                            <div className='viewcustomer-get py-3'>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex '>
                                        <span>Policy Number</span>
                                        <span>LKJSK234</span>

                                    </div>
                                </div>

                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Policy Type</span>
                                        <span>Family</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Insurer</span>
                                        <span>XYZ</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Plan Number</span>
                                        <span>Connect</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Start Date</span>
                                        <span>10/10/2022</span>

                                    </div>
                                </div>

                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>End Date</span>
                                        <span>10/10/2022</span>
                                    </div>
                                </div>

                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Area Of Cover</span>
                                        <span>Worldwide</span>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>


                    <div className='row d-flex'>
                        <div className='col-12'>
                            <span className='str-bold-h'>Payment Detail</span>
                            <div className='viewcustomer-get py-3'>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex '>
                                        <span>Currency</span>
                                        <span>USD</span>

                                    </div>
                                </div>

                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Frequency</span>
                                        <span>Annual</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Premium</span>
                                        <span>$3042</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Deductibles Or Copay</span>
                                        <span>$500</span>

                                    </div>
                                </div>
                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Payment Method</span>
                                        <span>Card</span>

                                    </div>
                                </div>

                                <div className='col-lg col-md col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Commission</span>
                                        <span>300</span>
                                    </div>
                                </div>




                            </div>

                        </div>

                    </div>


                    <div className='row d-flex'>
                        <div className='col-12'>
                            <span className='str-bold-h'>Members</span>
                            <div className='flex-row d-flex py-3'>
                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex '>
                                        <span>Name</span>
                                        <span>John Doe</span>
                                        <span>John Doe</span>
                                        <span>John Doe</span>
                                        <span>John Doe</span>

                                    </div>
                                </div>

                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Nationality</span>
                                        <span>Pakistani</span>
                                        <span>Pakistani</span>
                                        <span>Pakistani</span>
                                        <span>Pakistani</span>

                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Date Of Birth</span>
                                        <span>18/18/2022</span>
                                        <span>18/18/2022</span>
                                        <span>18/18/2022</span>
                                        <span>18/18/2022</span>

                                    </div>
                                </div>
                                <div className='col-lg-2 col-md-2 col-12'>
                                    <div className='flex-column d-flex px-3'>
                                        <span>Relation</span>
                                        <span>Child</span>
                                        <span>Child</span>

                                        <span>Child</span>

                                        <span>Child</span>


                                    </div>
                                </div>


                             



                            </div>
                          
                            <button className="btn-grey">
                            Add
                         </button>
                        </div>

                    </div>

                </div>

            </div>
        </div>



    );
};

export default ViewCustomer;



