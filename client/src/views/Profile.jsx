import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTransactions } from "../actions";
import Transactions from "../components/Transactions";
import Nav from '../components/Nav';



function Profile() {
  const transactions = useSelector((state) => state.transactions);

  const dispatch = useDispatch();
  const { id } = useParams();
  // cuando se monta la pagina hace el fetch;

  useEffect(() => {
    dispatch(getTransactions(id));
  }, [id, dispatch]);
  
  return (
    <p>
      <Nav id={id}/>
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
