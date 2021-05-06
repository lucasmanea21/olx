import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FiLink2 } from 'react-icons/fi'
export const Nav = styled.div`
    width: 100%;
    background-color: #002f34;
    height: 70px;
    top: 0;
    position: sticky;
    display:flex;
    color: #fff;
    z-index: 10;
`
export const NavbarWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    z-index: 1;
    padding: 0 5rem;
`
export const LogoWrapper = styled(Link)`
    text-decoration: none;
    margin-left: 2vw;
    position:relative;
`
export const Logo = styled.h1`
    color: #23e5db;
`
export const NavMenu = styled.div`
    display: flex;
    align-items:center;
    padding: 2rem;
    justify-content: center;
    

    p {
      font-size: 1.1rem;  
    }

    @media screen and (max-width: 768px) {
        display:none;
    }
`
export const MenuItem = styled.div`
    margin: 1.5rem;
`
export const MenuItems = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-right: 1rem;
`

export const Favorite = styled(Link)`
    font-size: 1.7rem;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
`
export const ContulMeu = styled(Link)`
    display: flex;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
`

export const ContLogo = styled.div `
    margin-right: 1rem;
    font-size: 2rem;
    
`
export const ContText = styled.p `

`
export const ButtonWrapper = styled(Link)`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    right: 0;
    margin-right: 22px;
    border-radius: 4px;
    
    text-decoration: none;
    border-color: #fff;
    background-color: #fff;

    &:hover {
        background-color:transparent ;
       p{
        color: #fff;   
       } 
    }
`

