import React, { useState } from "react";
import "./ExpenseForm.css";
import "./ExpenseForm";

const ExpenseForm = (props) => {
	// const [title, setTitle] = useState("");
	//one for three
	const [userInput, setUserInput] = useState({
		title: "",
		amount: "",
		date: "",
	});

	const changeTitle = (event) => {
		// setUserInput({
		// 	...userInput,
		// 	title: event.target.value,
		// });

		setUserInput((prevState) => {
			return {
				...prevState,
				title: event.target.value,
			};
		});
	};

	const changeAmt = (event) => {
		// setUserInput({
		// 	...userInput,
		// 	amt: event.target.value,
		// });

		setUserInput((prevState) => {
			return {
				...prevState,
				amount: parseInt(event.target.value),
			};
		});
	};

	const changeDate = (event) => {
		// setUserInput({
		// 	...userInput,
		// 	date: event.target.value,
		// });

		setUserInput((prevState) => {
			return {
				...prevState,
				date: event.target.value,
			};
		});
	};

	const submitHandler = (event) => {
		//stay on the current page without sending any request anywhere
		event.preventDefault();
		const expenseData = {
			title: userInput.title,
			amount: userInput.amount,
			date: new Date(userInput.date),
		};
		props.onSaveExpenseData(expenseData);
		setUserInput({
			title: "",
			amount: "",
			date: "",
		});
		props.onStopEditing();
	};

	const stopEditingHandler = () => {
		props.onStopEditing();
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input type="text" value={userInput.title} onChange={changeTitle} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						value={userInput.amount}
						min="0.01"
						step="0.01"
						onChange={changeAmt}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						value={userInput.date}
						min="2019-01-01"
						max="2022-12-31"
						onChange={changeDate}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={stopEditingHandler}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
