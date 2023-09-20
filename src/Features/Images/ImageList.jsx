import { DndContext, closestCenter } from '@dnd-kit/core'
import data from '../../data'
import ImageCard from './ImageCard'
import useSearch from './useSearch'
import { SortableContext, arrayMove, rectSortingStrategy, rectSwappingStrategy, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { useEffect, useState } from 'react'

const ImageList = () => {
  const { searchWord } = useSearch()
  const [images, setImages] = useState(data)
  const [filteredImages, setFilteredImages] = useState([])

  const onDragEnd = (event) => {
    const { active, over } = event

    if(active.id === over.id) {
      return
    }

    setImages(images => {
      const oldIndex = images.findIndex(image => image.id === active.id)
      const newIndex = images.findIndex(image => image.id === over.id)
      return arrayMove(images, oldIndex, newIndex)
    })
  }

  const imagesToShow = images.filter(image => image.tag.includes(searchWord))

  useEffect(() => {
    const newFilteredImages = images.filter((image) => image.tag.includes(searchWord))
    setFilteredImages(newFilteredImages)
  }, [searchWord, images])

  let content;
  if(!filteredImages.length) content = <p>No images to matches your search word. Try another word</p>

  if(filteredImages.length) {
    content = (
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext items={imagesToShow} strategy={rectSortingStrategy}>
          {filteredImages.map(image => (
                  <ImageCard src={image.tag} tag={image.tag} id={image.id} />
              ))}
        </SortableContext>
      </DndContext>
    ) 
  }

  return (
    <div className=' flex flex-wrap justify-center lg:grid grid-cols-4 gap-2'>
      {content}
    </div>
  )
}

export default ImageList