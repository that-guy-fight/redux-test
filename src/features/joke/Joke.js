import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	deleteJoke,
	getLocalJoke,
	getUserDefinedJoke,
	getRemoteJoke,
	selectJoke,
} from "./jokeSlice";
import styles from "./Joke.module.css";

export default function Joke() {
	const joke = useSelector(selectJoke);
	const dispatch = useDispatch();
	const [userSearch, setUserSearch] = useState("Enter Search");

	return (
		<>
			<div className={styles.row}>
				<button
					className={styles.button}
					aria-label="Get local joke"
					onClick={() => dispatch(getLocalJoke())}
				>
					Get locally sourced joke!
				</button>
				<button
					className={styles.button}
					aria-label="Get joke from the internet"
					onClick={() => dispatch(getRemoteJoke())}
				>
					Get joke from the internet!
				</button>
				<input
					className={styles.textbox}
					aria-label="User joke search"
					value={userSearch}
					onChange={(e) => setUserSearch(e.target.value)}
				/>
				<button
					className={styles.button}
					aria-label="Get custom joke! "
					onClick={() => dispatch(getUserDefinedJoke(userSearch))}
				>
					Get a custom joke!
				</button>
				<button
					className={styles.button}
					aria-label="Delete joke"
					onClick={() => dispatch(deleteJoke())}
				>
					Delete joke
				</button>
			</div>
			<div className={styles.row}>
				<p>{joke}</p>
			</div>
		</>
	);
}
