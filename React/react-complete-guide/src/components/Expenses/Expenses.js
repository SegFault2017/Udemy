import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	// console.log(props.items);
	const [filteredYear, setFilterYear] = useState("2020");
	const dropDownFilter = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filteredExpense = props.items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear;
	});

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter selected={filteredYear} onFilter={dropDownFilter} />
				<ExpensesChart expenses={filteredExpense} />
				<ExpensesList items={filteredExpense} />
				{/* {filteredExpense.length > 0 &&
					filteredExpense.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))} */}
				{/* {filteredExpense.length === 0 ? (
					<p>No expense found!</p>
				) : (
					filteredExpense.map((expense) => (
						<ExpenseItem
							key={expense.id}
							title={expense.title}
							amount={expense.amount}
							date={expense.date}
						/>
					))
				)} */}
				{/* <ExpenseItem
					title={expenses[0].title}
					amount={expenses[0].amount}
					date={expenses[0].date}
				/>
				<ExpenseItem
					title={expenses[1].title}
					amount={expenses[1].amount}
					date={expenses[1].date}
				/>
				<ExpenseItem
					title={expenses[2].title}
					amount={expenses[2].amount}
					date={expenses[2].date}
				/>
				<ExpenseItem
					title={expenses[3].title}
					amount={expenses[3].amount}
					date={expenses[3].date}
				/> */}
			</Card>
		</div>
	);
};
export default Expenses;
