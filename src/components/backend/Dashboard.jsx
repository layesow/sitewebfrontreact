import React from 'react'
import Header from '../header-footer/Header'
import Footer from '../header-footer/Footer'

const Dashboard = () => {
  return (
    <div>
        <Header/>
            <main>
                <div className="container my-5">
                <div className="row">
                    <div className='col-md-3'>
                        {/* side bar */}
                        <div className="card shadow border-0">
                            <div className="card-body">
                                <h4 className="">Sidebare</h4>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-9 dashboard'>
                        {/* main content */}
                        <div className="card shadow border-0">
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <h4 className="">Admin Dashboard</h4>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </main>
        <Footer/>
    </div>
  )
}

export default Dashboard