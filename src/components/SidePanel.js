import React from "react";
const SidePanel = ({onNavigate, currentTab}) =>{
    return (
        <ul id="wordList" className="tab_panel">
            <li onClick={() => onNavigate('main')} className={currentTab === 'main' ? 'active_tab tab' : 'tab'}>Main</li>
            <li onClick={() => onNavigate('kanban')} className={currentTab === 'kanban' ? 'active_tab tab' : 'tab'}>Kanban</li>
        </ul>
    )
}
export default SidePanel