import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../redux/actions";
import Transactions from "../components/Transactions";
import Nav from '../components/Nav';



function Profile() {
  const transactions = useSelector((state) => state.transactions);
  const user = useSelector((state) => state.name);
  const dispatch = useDispatch();
  // cuando se monta la pagina hace el fetch;

  useEffect(() => {
    const token = localStorage.getItem('token')
    dispatch(getTransactions(token));
  }, [dispatch]);
  let balance = parseInt(0)
  if(transactions) transactions.forEach(transaction => {
  balance += parseInt(transaction.amount)
  })
  console.log(transactions)
  return (
    <p id= "alltransactions">
      <Nav/>
      {user? <h2> All {user} transactions: </h2> : null}
      {transactions ? transactions.map(
        transaction =>
        <Transactions 
        concept={transaction.concept}
        amount={transaction.amount}
        date={transaction.date}
        type={transaction.type}
        />
        
      ) :
        <div>Loading...</div>
      }
      {transactions.length==0? <h3>You still haven't registered transactions</h3> : null}
      {balance>0? <h3 className="balance"> TOTAL: {balance} </h3> : null}
    </p>
  );
}

export default Profile;
