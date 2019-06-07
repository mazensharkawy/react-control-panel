import React, { Component } from 'react'
import { Table } from 'evergreen-ui'

class SelectedTable extends Component {
    render() {
        /* dummie data */
        let obj = [{
            'ID': 1,
            'Name': 'okkd',
            'Phone': '01000230000',
            'Description': 'old brown hair',
            'subject': 'maths',
            'Books': 'mcads'
        }, {
            'ID': 1,
            'Name': 'okkd',
            'Phone': '01000230000',
            'Description': 'old brown hair',
            'subject': 'maths',
            'Books': 'mcads'
        }, {
            'ID': 1,
            'Name': 'okkd',
            'Phone': '01000230000',
            'Description': 'old brown hair',
            'subject': 'maths',
            'Books': 'mcads'
        }, {
            'ID': 1,
            'Name': 'okkd',
            'Phone': '01000230000',
            'Description': 'old brown hair',
            'subject': 'maths',
            'Books': 'mcads'
        }]
        let keys = Object.keys(obj[0])
        let values = Object.values(obj)
        return (
            <div className="table-container">
                <Table>
                    <Table.Head>
                        {keys.map(key => {
                            return (
                                <Table.TextHeaderCell>
                                    {key}
                                </Table.TextHeaderCell>
                            )
                        })}
                    </Table.Head>
                    <Table.Body height={240}>
                        {values.map((val, i) => {
                            return (
                                <Table.Row key={val.ID} isSelectable onSelect={() => alert('selected')}>
                                    {keys.map(key => {
                                        return (
                                            
                                            <Table.TextCell>{val[key]}</Table.TextCell>
                                            )
                                        })}
                                </Table.Row>
                            )
                        })}
                    </Table.Body>

                </Table>
            </div>
        );
    }
}
export default SelectedTable;