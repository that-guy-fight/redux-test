import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchRemoteJoke, fetchUserDefinedJoke } from "./jokeAPI";

const initialState = {
	value: "Push the Joke button to get a joke!",
	status: "idle",
};

export const getRemoteJoke = createAsyncThunk(
	"joke/fetchRemoteJoke",
	async () => {
		const response = await fetchRemoteJoke();
		return response;
	}
);

export const getUserDefinedJoke = createAsyncThunk(
	"joke/fetchUserDefinedJoke",
	async (userString) => {
		const response = await fetchUserDefinedJoke(userString);
		return response;
	}
);

export const jokeSlice = createSlice({
	name: "joke",
	initialState,
	reducers: {
		deleteJoke: (state) => {
			state.value = "Press the Joke button to get a joke!";
		},
		getLocalJoke: (state) => {
			state.value = "This is a local joke!";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getRemoteJoke.pending, (state) => {
				state.status = "Fetching your joke";
			})
			.addCase(getRemoteJoke.fulfilled, (state, action) => {
				state.status = "idle";
				state.value = action.payload;
			})
			.addCase(getUserDefinedJoke.pending, (state) => {
				state.status = "Fetching your specialized joke";
			})
			.addCase(getUserDefinedJoke.fulfilled, (state, action) => {
				state.status = "idle";
				state.value = action.payload;
			});
	},
});

export const { deleteJoke, getLocalJoke } = jokeSlice.actions;
export const selectJoke = (state) => state.joke.value;

export default jokeSlice.reducer;
