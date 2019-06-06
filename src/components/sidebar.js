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
&:hover {
    background-color: palevioletred;
    color: white;
  }
`
const TableName = styled.p`
margin: 0px;
padding-top: 15px;
text-align: center
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