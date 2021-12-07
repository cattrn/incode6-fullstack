import { StyledImg } from './styles'

const ImageCard = ({photo, small, medium, color}) => {
  // logic goes here

  return (
    <StyledImg src={photo} alt='Photography from Unsplash' small={small} />
  )
}

export default ImageCard