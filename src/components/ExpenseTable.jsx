function ExpenseTable({ expenses, sortConfig, onRequestSort, onDeleteExpense }) {
    const getSortIndicator = (key) => {
      if (sortConfig.key !== key) return null;
      return sortConfig.direction === 'asc' ? '↑' : '↓';
    };
  
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th onClick={() => onRequestSort('description')}>
              Description {getSortIndicator('description')}
            </th>
            <th onClick={() => onRequestSort('amount')}>
              Amount {getSortIndicator('amount')}
            </th>
            <th onClick={() => onRequestSort('category')}>
              Category {getSortIndicator('category')}
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map(expense => (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>ksh {expense.amount.toFixed(2)}</td>
                <td>{expense.category}</td>
                <td>
                  <button 
                    onClick={() => onDeleteExpense(expense.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>No expenses found</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;