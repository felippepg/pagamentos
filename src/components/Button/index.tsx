import { NewDebt } from "./style";

function Button({ children, color, onClick } : { children: React.ReactNode, 
	color?: "inherit" | "primary" | "secondary" | 
	"success" | "error" | "info" | "warning" | undefined, onClick?: () => void }) {
	return(
		<NewDebt onClick={onClick} variant="contained" color={color}>{children}</NewDebt>

	);
}
export default Button;