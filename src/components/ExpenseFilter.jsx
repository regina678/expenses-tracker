function ExpenseFilter({ searchTerm, onSearchChange }) {
    return (
      <div className="expense-filter">
        <input
          type="text"
          placeholder="Search by description or category..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default ExpenseFilter;