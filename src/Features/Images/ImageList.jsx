import images from '../../data'
import ImageCard from './ImageCard'

const ImageList = () => {
  const renderedImages = images.map(image => (
    <ImageCard src={image.src} tag={image.tag} key={image.src}/>
  ))
  return (
    <div className='grid grid-cols-6 gap-2'>
      {renderedImages}
    </div>
  )
}

export default ImageList