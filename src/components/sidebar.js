import React from 'react';
import { Menu, Popover, Position, toaster, Button, Icon } from 'evergreen-ui'
// import SelectedTable from './selectedtable.js'
import _ from 'lodash'

const Sidebar = ({tables, selectTable = ()=>{}}) => {
    return (
        <div style={{maxHeight: window.height}} className="parent">
            <div className='sidenav'>
            {_.map(tables, table => 
                <div className="table-menu" onClick={()=>selectTable(table)}>
                    <div className="table-name">{table}</div>
                </div>)}
            </div>
        </div>
    );
}
export default Sidebar;