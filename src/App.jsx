import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import ExpenseFilter from './components/ExpenseFilter';
import './App.css';

function App() {
  // Initial state with sample expenses
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 100, category: 'Food' },
    { id: 2, description: 'Electric Bill', amount: 80, category: 'Utilities' },
    { id: 3, description: 'Movie Tickets', amount: 25, category: 'Entertainment' },
  ]);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });

  // Add new expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  };

  // Delete expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  // Sort expenses
  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  // Filter expenses based on search term
  const filteredExpenses = expenses.filter(expense => 
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort filtered expenses
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortConfig.key) return 0;
    
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ExpenseTable 
        expenses={sortedExpenses} 
        sortConfig={sortConfig} 
        onRequestSort={requestSort}
        onDeleteExpense={deleteExpense}
      />
    </div>
  );
}

export default App;