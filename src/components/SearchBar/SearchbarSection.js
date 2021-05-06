import React from 'react'
import SearchBar from './SearchBar'
import styled from 'styled-components'

const SearchBarSection = styled.div `
    background-color: #f2f4f5;
    display: flex;
    align-items: center;
    justify-content:center;
`

const SearchbarSection = () => {
    return (
        <SearchBarSection>
            <SearchBar />
        </SearchBarSection>
    )
}

export default SearchbarSection
