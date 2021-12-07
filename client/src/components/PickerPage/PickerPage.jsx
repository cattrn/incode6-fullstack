import { useState, useEffect } from 'react'
import axios from 'axios'
import ImageCard from '../ImageCard/ImageCard'
import Button from '../Button/Button'
import { StyledContainer, StyledButtonContainer, StyledImageContainer } from './styles'

const PickerPage = () => {
  const [photo, setPhoto] = useState('')
  const [trigger, setTrigger] = useState(false)

  useEffect(() => {

    // TODO: uncomment below to swap over dummy data
    // setPhoto('https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0')

    const getRandomPhoto = async () => {
      try {
        // your unsplash access key goes at the end here
        const response = await axios.get('https://api.unsplash.com/photos/random?client_id=')
        console.log('Hello from axios')
        setPhoto(response.data.urls.regular ? response.data.urls.regular : 'https://i.picsum.photos/id/237/536/354.jpg?hmac=i0yVXW1ORpyCZpQ-CknuyV-jbtU7_x9EBQVhvT5aRr0')
      } catch (error) {
        console.log(error)
      }
    }
    getRandomPhoto()

  }, [trigger])

  const handleLike = async () => {
    try {
      const response = await axios.post('/images/add', {url: photo})
      console.log(response)
      setTrigger(!trigger)
    } catch (error) {
      console.log(error)
    }
    
  }

  const handleDislike = () => {
    setTrigger(!trigger)
  }
  

  return (
    <StyledContainer>
    <StyledImageContainer>
      <ImageCard photo={photo} />
      <StyledButtonContainer>
        <Button onClick={handleLike}>Like</Button>
        <Button onClick={handleDislike}>Dislike</Button>
      </StyledButtonContainer>
      </StyledImageContainer>
    </StyledContainer>
  );
}

export default PickerPage;
