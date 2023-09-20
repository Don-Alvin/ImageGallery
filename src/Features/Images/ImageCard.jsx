import {AiFillTag } from 'react-icons/ai'

const ImageCard = ({src, tag, key}) => {
  return (
    <div className='border p-1 rounded shadow grid gap-2' key={key}>
      <img className='w-[400px] h-[200px] object-cover' src={src} alt={tag} />
      <span className='flex items-center gap-2'>
        <AiFillTag />
        {tag}
      </span>
    </div>
  )
}

export default ImageCard