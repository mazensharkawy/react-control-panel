import React from 'react';
import { Menu, Popover, Position, toaster, Button, Icon } from 'evergreen-ui'
// import SelectedTable from './selectedtable.js'
import _ from 'lodash'
import styled from 'styled-components'

const Table = styled.div`
align-text: center;
background-color: white;
height: 50px;
margin: 0px;
cursor: pointer;
border-width: 1px;
border-style: solid;
border-color: #b4b4b4;
border-width: 0px 0px 1px 0px;
&:hover {
    background-color: #49a6d7;
    color: white;
  }
`
const TableName = styled.p`
margin: 0px;
padding-top: 15px;
text-align: center;
`

const Sidebar = ({tables, selectTable = ()=>{}}) => {
    return (
        <div className='sidenav'>
        {_.map(tables, table => 
            <Table onClick={()=>selectTable(table)}>
                <TableName align="center">{table}</TableName>
            </Table>)}
        </div>
    );
}
export default Sidebar;