import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTransactions } from "../redux/actions";
import Nav from '../components/Nav';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  Td,
} from '@chakra-ui/react'



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
  if (transactions) transactions.forEach(transaction => {
 if(transaction.type=="ingress") balance += parseInt(transaction.amount)
 if(transaction.type=="egress") balance -= parseInt(transaction.amount)
  })
  console.log(transactions)
  return (<div>
      <Nav />
      {user ? <h3 id="title"> All {user} transactions: </h3> : null}
      <Table size="sm" colorScheme="teal" width="220vh" fontSize="3vh">
        <TableCaption marginTop="5vh">
          In this table you can view all your transactions
        </TableCaption>
        <Thead background="#3a6f7ed3">
          <Tr>
            <Th>Concept</Th>
            <Th>Amount</Th>
            <Th>Date</Th>
            <Th>Type</Th>
          </Tr>
        </Thead>
        <Tbody background="#3a6f7e36">
          {transactions ? transactions.map(
            transaction =>
              <Tr key={transaction.id}>
                <Td>{transaction.concept}</Td>
                <Td>{transaction.amount}</Td>
                <Td>{transaction.date}</Td>
                <Td>{transaction.type}</Td>
              </Tr>
          ) :
            <div>Loading...</div>
          }
        </Tbody>
      </Table>
        {transactions.length == 0 ? <h3>You still haven't registered transactions</h3> : null}
        <h3 className="balance"> TOTAL: {balance} </h3>
    </div>
  );
}

export default Profile;
