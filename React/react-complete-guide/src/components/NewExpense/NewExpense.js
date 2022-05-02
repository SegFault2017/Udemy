import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);
	const saveExpenseHandler = (expense) => {
		const expenseData = {
			...expense,
			id: Math.random().toString(),
		};
		console.log(expenseData);
		props.onAddExpenseData(expenseData);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add new Expense</button>
			)}
			{isEditing && (
				<ExpenseForm
					onSaveExpenseData={saveExpenseHandler}
					onStopEditing={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
