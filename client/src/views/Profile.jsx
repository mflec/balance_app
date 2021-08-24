import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTransactions } from "../actions";
import Transaction from "../components/Transactions";


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
      {transactions ? transactions.map(
        transaction =>
        <div>
        <Transaction transaction={transaction}/>
        </div>
      ) :
        <div>Loading...</div>
      }
    </p>
  );
}

export default Profile;
