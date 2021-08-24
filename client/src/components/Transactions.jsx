import React from "react";

function Transactions(transaction) {
    return <div>
        <h3>{transaction.concept}</h3>
        <hr />
        <p className="trans-body">{transaction.amount}</p>
        <hr />
        <p className="trans-body">{transaction.date}</p>
        <hr />
        <p className="trans-body">{transaction.type}</p>
    </div>
}

export default Transactions