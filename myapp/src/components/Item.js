import { useState } from 'react';
import StripeContainer from './StripeContainer';

function App() {
	const [showItem, setShowItem] = useState(false);
	return (
		<div>
			<h1>Item</h1>
			{showItem ? (
				<StripeContainer />
			) : (
				<>
					<h3>$10.00</h3>
					<img src="https://thumbs.dreamstime.com/b/ic%C3%B4ne-de-lien-avec-la-main-clic-concept-d-internet-illustration-vecteur-isolement-sur-le-fond-blanc-127158671.jpg" alt='Spatula' />
					<button onClick={() => setShowItem(true)}>Purchase Spatula</button>
				</>
			)}
		</div>
	);
}

export default App;