import React, { useContext } from 'react'
import './styles.css'
import { BillContext } from '../../context/BillContext'

const BillOptions = () => {

    const { selectedCostInterval, setSelectedCostInterval } = useContext(BillContext)

    return (
        <div className='interval-option-container'>
            <div className={ selectedCostInterval === 'Daily' ? 'selected-interval' : 'interval'}
            onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                Daily
            </div>
            <div className={ selectedCostInterval === 'Weekly' ? 'selected-interval' : 'interval'}
            onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                Weekly
            </div>
            <div className={ selectedCostInterval === 'Monthly' ? 'selected-interval' : 'interval'}
            onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                Monthly
            </div>
            <div className={ selectedCostInterval === 'Yearly' ? 'selected-interval' : 'interval'}
            onClick={(e) => setSelectedCostInterval(e.target.innerText)}>
                Yearly
            </div>
        </div>
    )
}

export default BillOptions
