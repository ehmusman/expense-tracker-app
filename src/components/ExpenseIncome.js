import React from 'react'


function ExpenseIncome() {

    return (
        <div className='row px-3'>

            <div className="col-6">
                <h3>Income is</h3>
                <h4 className="text-success">$ 7474 </h4>
            </div>
            <div className="col-6">
                <h3>Expense Is</h3>
                <h4 className="text-danger">$ 3838</h4>
            </div>
        </div>
    )
}

export default ExpenseIncome
