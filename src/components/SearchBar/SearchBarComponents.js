import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SearchSection = styled.div`
    height: 80px;
    display:flex;
    justify-content:center;
    width: 90%;
    border-radius: 5px;
    padding: 24px;

    @media screen and (max-width: 768px) {
        height: 60px;
    }
`

export const SearchbarDiv = styled.div`
    width:55%;
    display: flex;
    border: 1px solid;
    border-color: #e1e2e3;
    border-right: none;
    justify-content:center;
    
` 

export const SearchIcon = styled.div `
    width: 15%;
    background-color: #fff;
    align-items:center;
    justify-content:center;
    display:flex;
    font-size: 1.5rem;
    
`


export const Searchbar = styled.input`
    width: 85%;
    display:flex;
    border-style:none;
    outline: none;
`

export const LocationDiv = styled.div `
    width: 20%;
    display:flex;
    border: 1px solid;
    border-color: #e1e2e3;
    border-right: none;
    justify-content:center;

    @media screen and (max-width: 768px) {
        display:none;
    }
`
export const LocationIcon = styled.div `
    width: 25%;
    background-color: #fff;
    align-items:center;
    justify-content:center;
    display:flex;
    font-size: 1.5rem;
    border-style: none;
`

export const LocationBar = styled.input`
    width: 75%;
    border: 1px solid;
    border-color: #e1e2e3;
    border-style: none;
    outline: none;
`

// export const ButtonDiv = styled.div`
//     width:15%;
//     display:flex;
//     border: 1px solid;
//     border-color: #e1e2e3;
//     border-right: none;
//     justify-content:center;
//     background-color: #fff;
// `



export const SearchButton = styled(Link)`
    background-color: ${({searching}) => (searching ? '#002f34' : '#fff')}; 
    color: ${({searching}) => (searching ? '#fff' : '#002f34')};
    border: 1px solid;
    border-color: #e1e2e3;
    text-decoration: none;
    display:flex;
    justify-content:center;
    width: 15%;
    align-items:center;
    transition: 0.1s ease-in;
    font-weight: 700;

    &:hover {
        background-color: #002f34; 
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        background-color: #002f34;
        color: #fff;
    }
`

export const ButtonText = styled.p `
    display: flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width: 768px) {
        display:none;
    }
`

export const SearchIconBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    margin-left: 6px;

    @media screen and (max-width: 768px) {
        font-size: 2rem;
        justify-content:center;
        align-items:center;

    }
`

export const AnunturiFiltrate = styled.div `
    color: #000;
`