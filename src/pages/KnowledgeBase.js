import React from 'react'


const KnowledgeBase = () => {


  

   

    return (

        <div className="control-overwidth padding-given">

            <div className="container-fluid">
                <div className="row">
                    <div className=' d-flex flex-row align-items-center justify-content-between'>
                        <h1 className='main-heading'>Knowledge Base / FAQ</h1>

                        <button className='btn-grey-padding' style={{ margin: '0px 10px' }}>Export Data</button>

                    </div>

                    <div>
                        <span>manage client data</span>
                    </div>



                </div>


                <div className='row mt-4'>
                    <div className='col-lg-6 col-md-6 col-12'>
                        <form className="d-flex">
                            <input style={{ borderRadius: "15px", padding: "8px 16px" }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                        </form>
                    </div>
                   

                </div>

              
                <div className='row'>
                <div className='btn d-flex justify-content-center align-items-center' style={{height: "80vh"}}>
                <button className='btn-grey-padding' style={{ margin: '0px 10px' }}>Create Category</button>
                </div>
                </div>

            </div>


        </div>
    )
}

export default KnowledgeBase
