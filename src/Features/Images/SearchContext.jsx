import { createContext, useState } from "react";

const SearchContext = createContext()

export const SearchContextProvider = ({children}) => {
    const [searchWord, setSearchWord] = useState("")

    return (
        <SearchContext.Provider value={{searchWord, setSearchWord}}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext