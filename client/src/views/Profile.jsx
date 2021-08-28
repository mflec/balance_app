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

  console.log(transactions)
  return (
    <p>
      <Nav/>
      <h1> All {user} transactions </h1>
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
    </p>
  );
}

export default Profile;
