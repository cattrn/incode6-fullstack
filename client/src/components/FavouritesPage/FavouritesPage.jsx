import { useState, useEffect } from 'react'
import axios from 'axios'
import ImageCard from "../ImageCard/ImageCard"
import { StyledContainer } from "./styles"

const FavouritesPage = () => {
  const [savedPhotos, setSavedPhotos] = useState([])

  useEffect(() => {
    
    const getData = async () => {
      try {
        const { data } = await axios.get('/images')
        console.log(data)
        setSavedPhotos(data)
      } catch (error) {
        console.log(error)
      }
    }

    getData()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <StyledContainer>
      {savedPhotos.map((photo) => (
        <ImageCard key={photo._id} photo={photo.url} small />
      ))}
    </StyledContainer>
  )
}

export default FavouritesPage