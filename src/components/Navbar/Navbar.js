import React from 'react'
import {Nav,NavbarWrapper, LogoWrapper, Logo, NavMenu,MenuItem, Favorite, ContulMeu,ContLogo,ContText, MenuItems, ButtonWrapper} from './NavbarComponents'
import Button from '../Button'
import {FiHeart} from 'react-icons/fi'
import {BsPerson} from 'react-icons/bs'

const Navbar = () => {

    // const scrollToTop = window.scrollTo(0,0);
    return (
        <Nav>
            <NavbarWrapper>
                <LogoWrapper to='/'>
                    <Logo >Olx</Logo>
                </LogoWrapper>
                <NavMenu>
                    <MenuItems>
                    <MenuItems>
                    <Favorite to='/signin'>
                        <FiHeart />
                    </Favorite>
                    </MenuItems>
                    <MenuItem>
                    <ContulMeu to='/signin' >
                        <ContLogo >
                          <BsPerson />
                       </ContLogo>
                   <ContText>Contul meu</ContText> 
                    </ContulMeu>
                    </MenuItem> 
                    </MenuItems>
                <ButtonWrapper >
                    <Button to='/signin' primary="true" text='Adauga anunt nou' color='#fff'></Button>
                </ButtonWrapper>
                </NavMenu>
               
            </NavbarWrapper>
        </Nav>
    )
}

export default Navbar