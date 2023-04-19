import './ExpensesFilter.css';

const ExpensesFilter = (props) => {

  const dropdownYearChangeHandler = function(event){
    props.onChangeExpensesFilter(event.target.value);
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value = {props.onSelectedYear} onChange={dropdownYearChangeHandler}>
          <option value='2026'>2026</option>
          <option value='2025'>2025</option>
          <option value='2024'>2024</option>
          <option value='2023'>2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;