import React from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import SelectedTable from './components/selectedtable'
function App() {
  const tables = [
    'table1', 
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
    'table2',
     'table3'
    ]
  return (
    <div className="App">
      <Sidebar tables={tables}/>
      <SelectedTable/>
    </div>
  );
}

export default App;
