import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const trList = items.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    );
  });
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{trList}</tbody>
    </table>
  );
};

export default TransactionHistory;
