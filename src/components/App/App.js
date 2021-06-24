import React, { useContext } from 'react'
import './App.css';
import AddBills from '../AddBills/AddBills'
import BillsList from '../BillsList/BillsList'
import BillTotal from '../BillTotal/BillTotal';
import BillOptions from '../BillOptions/BillOptions';
import EditBills from '../EditBills/EditBills';
import { BillContext } from '../../context/BillContext';

const App = () => {

const { editModeEnabled } = useContext(BillContext)

  return (
    <div className="bills-container">
        {
          editModeEnabled ? <EditBills/> : <span><BillOptions/><AddBills/><BillTotal/><BillsList/></span>
        }
    </div>
  );
}

export default App;
