import React from "react";

// Components
import Grid from "./components/Grid";

import { GlobalStyle, Container, Faded } from "./GlobalStyle";

const App = () => {
	return (
		<Container>
			<h1>Welcome to the Sliding Game!</h1>
			<p>
				To win the game, arrange the numbers from 0 to 14 in order from
				left to right and top to bottom. Drag and drop the numbers to
				rearrange the numbers.
			</p>
			<Grid />
			<GlobalStyle />

			<Faded>
				Kevin Liao
				<br />
				Web Development Section 83 EVEN
				<br />
				2021/11/04
				<br />
				<br />
				Reflection: This is the first time I've used React, and I
				already dislike it. I recognize the philosphy behind it, but the
				way the components interact are so limiting. I spent days
				figuring out how components can interact with one another, and
				none of the solutions worked. It was so bad I had to resort to
				regular JavaScript functions. Hopefully I will have better luck
				next time! This is a first project after all.
				<br />
				To make the actual sliding game interactive, I used a library
				called Draggable by Shopify. I wanted to use this library
				because I wasn't satisfied with the regular drag and drop
				features, and Draggable makes dragging and dropping very smooth.
				<br />
				Although this project took so much longer than expected
				(Especilly with college applications in the way!) I was happy
				with what I've achieved and all that I've learned about React
				and making web projects. I thought React was going to be easy
				and the CSS will be hard, and I was wrong! I will definitely try
				and use React for future projects as well to try and improve my
				web deveopment skills.
			</Faded>
		</Container>
	);
};

export default App;
