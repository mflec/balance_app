import React from "react";

function Transactions({concept, amount, date, type}) {
    return <div>
        <h3 className="transaction">CONCEPT : {concept}</h3>
        <p className="trans-body-1">AMOUNT : {amount}</p>
        <p className="trans-body-2">DATE: {date}</p>
        <p className="trans-body-3">TYPE: {type}</p>

    </div>
}

export default Transactions