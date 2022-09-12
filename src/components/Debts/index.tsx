import InputAdornment from "@mui/material/InputAdornment";
import { Box, Aside, Form, Debtors, Text, BtnGroup, SelectControll } from "./style";
import Button from "@mui/material/Button";
import IDebts from "../../types/debts";
import { v4 as uuid } from "uuid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import api from "../../config";

interface IUser {
	id: number,
	name: string
}

function Debts({ changeDebts, debts, removeItem } : 
	{ 
		changeDebts: (childrenData: IDebts) => void, debts: IDebts[], 
		removeItem: (childrenData: IDebts) => void 
	}) {

	const [, setName] = useState("");
	const [id, setId] = useState<string | undefined>("");
	const [reason, setReason] = useState("");
	const [value, setValue] = useState("");
	const [user_id, setUserId] = useState<string | undefined>("");
	const [users, setUsers] = useState<IUser[]>([]);
	
	useEffect(() => {
		api
			.get<IUser[]>("/users")
			.then((response) => setUsers(response.data))
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			});
	}, []);
	

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

		e.preventDefault();
		const user: IUser[] = users.filter(user => user.id === Number(user_id));
		if(id) {

			const user_debt = debts.filter(debt => debt.id === id);
			user_debt[0].id = id;
			user_debt[0].name = user[0].name;
			user_debt[0].reason = reason;
			user_debt[0].value = Number(value);

		} else {
			const userDebt = {
				id: uuid(),
				user_id: Number(user_id),
				reason: reason, 
				value: Number(value),
				name: user[0].name

			};
			changeDebts(userDebt);
		}

	
		setName("");
		setReason("");
		setValue("");
		setUserId("");
		setId("");
	};

	const remove = () => {
		const user_debt = debts.filter(debt => debt.id === id);
		removeItem(user_debt[0]);

		setName("");
		setReason("");
		setValue("");
		setUserId("");
		setId("");

	};

	const loadProfileDebtors = (id: string | undefined) => {
		setId(id);
		debts.filter((item: IDebts) => {
			if(item.id === id) {
				setName(item.name);
				setUserId(String(item.user_id));
				setReason(item.reason);
				setValue(String(item.value));
				return item;
			}
		});
	};

	const handleChange = (event: SelectChangeEvent) => {
		setUserId(event.target.value);
	};


	return (
		<Box>
			{debts.length > 0 &&
				<Aside>
					<ul>
						{debts.map((item) => {
							return(
								<Debtors key={item.id} onClick={() => loadProfileDebtors(item.id)}>{item.name}</Debtors>
							);
						})}
					</ul>
				</Aside> 
			}

			<Form onSubmit={(e) => handleSubmit(e)}>
				<SelectControll sx={{ m: 1, minWidth: 120 }} size="small">
					<InputLabel id="demo-select-small">Clientes</InputLabel>
					<Select
						labelId="demo-select-small"
						id="demo-select-small"
						label="Clientes"
						value={user_id}
						onChange={handleChange}
					>
						<MenuItem value="">
							<em>Nenhum</em>
						</MenuItem>
						{
							users.map((user) => {
								return(
									<MenuItem 
										key={user.id} 
										value={user.id} 
									>{user.name}
									</MenuItem>
								);
							})
						}
					</Select>
				</SelectControll>

				<Text
					sx={{ m: 1, minWidth: 120 }} 
					size="small" 
					id="outlined-basic" 
					label="Motivo"
					required
					value={reason}
					onChange={(e) => setReason(e.target.value)} 
				/>
				<Text 
					sx={{ m: 1, minWidth: 120 }} 
					size="small" 
					type="number"
					id="outlined-basic" 
					label="Valor"
					required
					value={value}
					onChange={(e) => setValue(e.target.value)}
					InputProps={{
						startAdornment: <InputAdornment position="start">R$</InputAdornment>,
					}}
				/>

				<BtnGroup spacing={2} direction="row">
					<Button variant="contained" color="warning" onClick={remove}>Excluir</Button>
					<Button variant="contained" color="success" type="submit">Salvar</Button>
				</BtnGroup>
			</Form>
		</Box>
	);
}

export default Debts;