import React, { useContext, useState } from 'react' 
import { BillContext } from '../../context/BillContext'
import './styles.css'

const AddBills = () => {
    const [newBillTitle, setNewBillTitle] = useState('')
    const [newBillCost, setNewBillCost] = useState('')

    const { updateBills } = useContext(BillContext)

    const billObjectValid = () => {
        //validation of bill 
        //cost contains only numbers
        //title contains letters and not only whitespaces
        const costValid = newBillCost && Number.parseFloat(newBillCost)

        const titleValid = newBillTitle && newBillTitle.split('').find(char => char !== ' ')
        return titleValid && costValid
    }

    const clearForm = () => {
        setNewBillCost('')
        setNewBillTitle('')
    }

    return (
        <div className="add-bill-container">
         <input className="add-bill-form-control form-control" placeholder='Enter Bill Title' type="text" value={newBillTitle} 
         onChange={(e) => setNewBillTitle(e.target.value)}></input>
         <input className="add-bill-form-control form-control" placeholder='Enter Bill Cost/Month' type="number" value={newBillCost} 
         onChange={(e) => setNewBillCost(e.target.value)}></input>
         <button className="add-bill-form-control btn btn-primary"
         onClick={() => {
          if(billObjectValid()) {
          updateBills({
              title: newBillTitle,
              monthlyCost: newBillCost
          });
          clearForm();
          }
         }}>Add Bill</button>
        </div>
    )
    
}

export default AddBills