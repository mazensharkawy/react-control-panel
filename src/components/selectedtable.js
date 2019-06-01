import React,{Component} from 'react'
import {Table} from 'evergreen-ui'

class SelectedTable  extends Component {
    render(){
     /*
        var obj = {
            'teacher': {
            'ID': 'int(11)',
            'Name': 'varchar(255)',
            'Phone': 'varchar(255)',
            'Description': 'varchar(1000)',
            'subject': 'int(11)',
            'Pic Url': 'varchar(300)',
            'Books': 'varchar(500)',
            'Student Scores': 'varchar(1000)',
            'Centers': 'varchar(1000)'
        }
    }
    obj is data response 
    */
   let keys = Object.keys(obj)
    return (
        <Table>
            <Table.Head>
                {keys.map(key=>{
                    return(
                <Table.TextHeaderCell>
                    {key}
                </Table.TextHeaderCell>
                )})}
            
            </Table.Head>
            {/* map over json */}
            <Table.Body height={240}>
            
            {keys.map(key=>{
                return(
                    <Table.Row key={obj.ID} isSelectable onSelect={() => alert('selected')}>
                        <Table.TextCell>{obj[key]}</Table.TextCell>
                    </Table.Row>
                    )
            })}                       
            </Table.Body>
        
        </Table>
    );
                }
}
export default SelectedTable;