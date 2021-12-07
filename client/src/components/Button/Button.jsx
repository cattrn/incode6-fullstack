import { StyledButton } from "./styles"

const Button = ({onClick, children}) => {

  return (
    <StyledButton type="button" onClick={onClick}>{children}</StyledButton>
  )
}

export default Button