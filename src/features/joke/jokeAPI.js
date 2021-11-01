import axios from "axios";

export async function fetchRemoteJoke() {
	axios
		.get(
			"https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=single"
		)
		.then(function (resp) {
			console.log(`Joke: ${resp.data.joke}`);
			return resp.data.joke;
		})
		.catch(function (error) {
			console.log(`New joke error: ${error}`);
		});
}

export async function fetchUserDefinedJoke(userString) {
	axios
		.get(
			`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw&type=single&contains=${userString}`
		)
		.then(function (resp) {
			console.log(`User defined joke: ${resp.data.joke}`);
			return resp.data.joke;
		})
		.catch(function (error) {
			console.log(`User defined joke error: ${error}`);
		});
}
