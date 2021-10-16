//js
import React from 'react';

import ExpenseList from './ExpenseList';
import ExpenesListFilters from './ExpenseListFilter';

const ExpenseDashboardPage = () => (
    <div>
        <ExpenesListFilters/>
        <ExpenseList/> 
    </div>
);

export default ExpenseDashboardPage;
