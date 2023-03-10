import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString('zh-TW', { month: 'long' })
  const day = props.date.toLocaleString('zh-TW', { day: '2-digit' })

  return (
    <div className="expense-date">
      <div className="expense-date__year">{ year }年</div>
      <div className="expense-date__month">{ month }</div>
      <div className="expense-date__day">{ day }</div>
    </div>
  );
}

export default ExpenseDate;