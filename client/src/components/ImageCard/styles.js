import styled from 'styled-components'

export const StyledImg = styled.img`
  border-radius: 15px;
  box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.2);
  width: 400px;
  max-width: ${props => props.small ? '200px' : '80%'};
  max-height: ${props => props.small ? '30vh' : '70vh'};
  object-fit: cover;
  /* TODO: move covered images so that it's centered */
`