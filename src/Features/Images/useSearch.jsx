import { useContext } from 'react'
import SearchContext from './SearchContext'

const useSearch = () => {
  return useContext(SearchContext)
}

export default useSearch