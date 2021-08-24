import React from "react";

function Transactions({concept, amount, date, type}) {
    return <div className="transaction">
        <h1> ALL MY TRANSACTIONS </h1>
        <hr/>
        <h3>{concept}</h3>
        <p className="trans-body">{amount}</p>
        <p className="trans-body">{date}</p>
        <p className="trans-body">{type}</p>
        <hr />
    </div>
}

export default Transactions