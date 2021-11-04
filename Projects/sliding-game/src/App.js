import React from "react";

// Components
import Grid from "./components/Grid";

import { GlobalStyle, Container } from "./GlobalStyle";

const App = () => {
	return (
		<Container>
			<h1>Welcome to the Sliding Game!</h1>
			<p>
				To win the game, arrange the numbers from 1 to 15 in order from left
				to right and top to bottom. Drag and drop the numbers to rearrange
				the numbers.
			</p>
			<Grid />
			<GlobalStyle />
		</Container>
	);
};

export default App;
