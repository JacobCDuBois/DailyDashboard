import React, { useState } from 'react';
import Main from "./Main";
import Kanban from "./Kanban";
import '../styles/dashboard.css'
import SidePanel from "./SidePanel";
const Dashboard = () =>{
    const [currentTab, setCurrentTab] = useState('main')

    const handleNavigate = (tab) => {
        console.log('here')
        setCurrentTab(tab)
    }
    return (
        <div className="Dashboard_Container">
            <div className="col-md-12 h-100">
                <div className="row h-100">
                    <div className="col-md-1 side_container">
                        <div className={"row"}>
                            <SidePanel onNavigate={handleNavigate} currentTab = {currentTab}></SidePanel>

                        </div>
                    </div>
                    <div className="col-md-11 main_display">
                        <div className="row">
                            {currentTab === 'main' && <Main/>}
                            {currentTab === 'kanban' && <Kanban/>}
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}
export default Dashboard