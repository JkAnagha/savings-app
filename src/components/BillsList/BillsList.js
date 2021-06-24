import React, { useContext } from 'react' 
import './styles.css'
import { BillContext } from '../../context/BillContext'


const BillsList = () => {
const { bills, editBill, setEditModeEnabled } = useContext( BillContext )
    return (
        <div className="bills-list-container">
            <h6 className='edit-mode-btn' onClick={() => setEditModeEnabled(true)}>Edit</h6>
            {
                bills.map((bill, index) => {
                    return(
                        <div key={index} className='bills-list-row'>
                            <input type='checkbox' className='form-check-input'
                                //checked={bill.enabled}
                                defaultChecked={bill.enabled}
                                onChange={() => editBill({
                                    title: bill.title,
                                    monthlyCost: bill.monthlyCost,
                                    enabled: !bill.enabled
                                })}>
                            </input>
                            <div className='bills-list-row-content'>
                                {bill.title} - Rs.{bill.monthlyCost}
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
    
}

export default BillsList