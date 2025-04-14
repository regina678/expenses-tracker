import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.description || !formData.amount || !formData.category) return;
    
    onAddExpense({
      description: formData.description,
      amount: parseFloat(formData.amount),
      category: formData.category
    });
    
    // Reset form
    setFormData({ description: '', amount: '', category: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <div className="form-group">
        <label>Description:</label>
        <input 
          type="text" 
          name="description" 
          value={formData.description} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div className="form-group">
        <label>Amount:</label>
        <input 
          type="number" 
          name="amount" 
          value={formData.amount} 
          onChange={handleChange} 
          step="0.01" 
          required 
        />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input 
          type="text" 
          name="category" 
          value={formData.category} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;