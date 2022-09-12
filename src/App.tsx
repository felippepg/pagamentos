import { useState } from "react";
import Debts from "./components/Debts";
import Home from "./components/Home";
import IDebts from "./types/debts";
import { GlobalStyle } from "./components/GlobalStyle";
import { Box, Container } from "./style";
import Button from "./components/Button";

function App() {
	const [debts, setDebts] = useState<IDebts[]>([]);
	const [showMenu, setShowMenu] = useState<boolean>(false);

	const handleCallback = (childrenData: IDebts) => {
		setDebts((oldDebts) => [...oldDebts, childrenData]);
	};

	const removeItem = (childrenData: IDebts) => {
		setDebts(debts.filter(debt => debt.id != childrenData.id));
	};

	return (
		<Container>
			<GlobalStyle />
			{	
				showMenu === true  ? 
					<Debts changeDebts = {handleCallback} 
						removeItem = {removeItem} debts = {debts} 
					/> :
					<Home />
			}
			<Box>
				<Button onClick={() => setShowMenu(true)}>Novo</Button>
			</Box>
		</Container>
	);
}

export default App;
