import React, {useState, useEffect} from 'react'
import {SearchSection,SearchIconBtn, ButtonText,LocationDiv,LocationIcon,SearchbarDiv,SearchIcon, Searchbar, LocationBar, SearchButton} from './SearchBarComponents'
import {AiOutlineSearch} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import Data from '../../Data/ProductData.json'


const SearchBar = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searching, setSearching] = useState(false)

   useEffect(() => {
      if (searchValue === ''){
         setSearching(false) 
      } else {
          setSearching(true)
      }
   }, [searchValue])

    return (
     <>   
    
        
        
        <SearchSection>
            <SearchbarDiv>
            <SearchIcon>
              <AiOutlineSearch />
            </SearchIcon>
            <Searchbar placeholder= {`${Data.length} anunturi in aproprierea ta `}  onInput={() =>  setSearching(true)}onChange={event => {setSearchValue(event.target.value)}}/>
            </SearchbarDiv>
          
           <LocationDiv>
                <LocationIcon>
               <GoLocation />
           </LocationIcon>
            <LocationBar placeholder= 'Toata Romania'/>
         </LocationDiv>
          
           <SearchButton searching={searching} to='/'>
               <ButtonText>Cauta acum</ButtonText>
               <SearchIconBtn>
               <AiOutlineSearch />
               </SearchIconBtn>
             </SearchButton>  
            
        </SearchSection>
       {/* <AnunturiFiltrate>
        {JSONDATA.filter((val) => {
        if(searchValue === '') {
            return null
        } else if (val.anunt_titlu.toLowerCase().includes(searchValue.toLowerCase())) {
            return val
        }
    }).map((val, key) => (
        <div className='anunt-titlu' key={key}>
            <p>{val.anunt_titlu}</p>
        </div>
    ))}
    </AnunturiFiltrate> */}
     </>
    )
    
}

// onChange={event => {{setSearchValue(event.target.value)}}}

export default SearchBar
