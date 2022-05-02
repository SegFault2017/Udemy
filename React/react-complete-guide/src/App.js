import "./App.css";
import { Container, Row, FormControl } from "react-bootstrap";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";
const DUMMY_EXPENSES = [
	{
		id: "e1",
		title: "Toilet Paper",
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{
		id: "e2",
		title: "New TV",
		amount: 799.49,
		date: new Date(2021, 2, 12),
	},
	{
		id: "e3",
		title: "Car Insurance",
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: "e4",
		title: "New Desk (Wooden)",
		amount: 450,
		date: new Date(2021, 5, 12),
	},
];
function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
	const addExpenseHandler = (expenseData) => {
		console.log(expenseData);
		setExpenses((prevExpenses) => {
			return [expenseData, ...prevExpenses];
		});
	};
	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>
		<div>
			{/* <h2>Let's get started!</h2> */}
			<FormControl
				type="number"
				placeholder="Enter a new AUM"
				aria-label="aum"
				aria-describedby="new aum"
				defaultValue={10.01}
				step={1}
			/>
			{/* <NewExpense onAddExpenseData={addExpenseHandler} />
			<Expenses items={expenses} /> */}
		</div>
	);
}

export default App;