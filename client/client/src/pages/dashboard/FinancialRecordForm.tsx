import React, { useState } from 'react'
import { useUser } from '@clerk/clerk-react';
function FinancialRecordForm() {
const [description, setDescription] = useState<string>('');
const [amount, setAmount] = useState<string>('');
const [category, setCategory] = useState<string>('');
const [paymentMethod, setPaymentMethod] = useState<string>('');
const {user} = useUser();
const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
  event.preventDefault();
  const newRecord = {
    userId: user?.id,
    date: new Date(),
    description: description,
    amount: parseFloat(amount),
    category: category,
    paymentMethod: paymentMethod,
  }
//   addRecord(newRecord)
  setDescription(""
  )
  setAmount("");
  setCategory('');
  setPaymentMethod('');
}
  return (
    <div className='form-container'>
        <form onSubmit={handleSubmit}>
            <div className='form-field'>
                <label>Description</label>
                <input type='text' value={description} required className='input' onChange={(e)=>setDescription(e.target.value)} />
            </div>
            <div className='form-field'>
                <label>Amount:</label>
                <input type='number' value={amount} required className='input' onChange={(e)=>setAmount(e.target.value)} />
            </div>
            <div className='form-field'>
                <label>Category:</label>
                <select required className='input'
                onChange={(e)=>setCategory(e.target.value)}
                value={category}
                >
                  <option  >Select a  Category</option>
                  <option value='Food'>Food</option>
                  <option value='Rent'>Rent</option>
                  <option value='Salary'>Salary</option>
                  <option value='Utilities'>Utilities</option>
                  <option value='Entertainment'>Entertainment</option>
                  <option value='Other'>Other</option>
                </select>             
            </div>

            <div className='form-field'>
                <label>Payment Method</label>
                <select required className='input' value={paymentMethod}onChange={(e)=>setPaymentMethod(e.target.value)} >

                <option value=''>Select a payment method</option>
                <option value=''>Credit Card</option>
                <option value=''>Cash</option>
                <option value=''>Bank Review</option>
                </select></div>
                <button type='submit' className='button'>Add Record</button>
        </form>
    </div>
  )
}

export default FinancialRecordForm