import React from 'react'
import { useUser } from '@clerk/clerk-react';
import FinancialRecordForm from './FinancialRecordForm';
import FinancialRecordList from './FinancialRecordList'
export default function Dashboard() {
    const {user} = useUser();
  return (
    <div className='dashboard-container'>
        <h1> Welcome {user?.firstName}! Here Are Your Finances:</h1>
        <FinancialRecordForm/>
        <FinancialRecordList/>
    </div>
  )
}
