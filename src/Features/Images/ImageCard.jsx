import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {AiFillTag } from 'react-icons/ai'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const ImageCard = ({src, tag, id, placeholder}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id})

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }
  return (
          <div className='border p-1 rounded shadow grid gap-2' ref={setNodeRef} {...attributes} {...listeners} key={id} style={style}>
            <LazyLoadImage 
              className='w-[200px] h-[150px] lg:w-[400px] lg:h-[200px] object-cover'
              placeholderSrc={placeholder} 
              src={src} 
              alt={tag} 
            />
            <span className='flex items-center gap-2'>
              <AiFillTag />
              {tag}
            </span>
          </div>
       )   
}

export default ImageCard