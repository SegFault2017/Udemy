import React, { useState } from "react";

import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModal";

const AddUser = (props) => {
	const [enteredUserName, setEnteredUserName] = useState("");
	const [enteredAge, setEnteredAge] = useState("");
	const [error, setError] = useState();

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name ",
			});
			return;
		}
		if (+enteredAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a age > 0",
			});
			setError(true);
			return;
		}
		setEnteredUserName("");
		setEnteredAge("");
		props.onAddUser(enteredUserName, enteredAge);
	};

	const usernameChangedHandler = (event) => {
		setEnteredUserName(event.target.value);
	};

	const ageChangedHandler = (event) => {
		setEnteredAge(event.target.value);
	};

	const errroHandler = () => {
		setError(null);
	};

	return (
		<div>
			{error && (
				<ErrorModel
					title={error.title}
					message={error.message}
					onConfirm={errroHandler}
				/>
			)}
			<Card className={classes.input}>
				<form onSubmit={addUserHandler}>
					<label htmlFor="username">Username</label>
					<input
						id="username"
						type="text"
						value={enteredUserName}
						onChange={usernameChangedHandler}
					/>
					<label htmlFor="age">Age (Years)</label>
					<input
						id="age"
						type="number"
						value={enteredAge}
						onChange={ageChangedHandler}
					/>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
};

export default AddUser;
