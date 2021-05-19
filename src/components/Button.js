import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const ButtonWrapper = styled(Link) `
    background-color:#fff;
    color: ${({primary}) => (primary ? "#002f34" : "#000")};
    border: 2px solid;
    border-radius: 4px;
    display: block;
    align-items : center;
    text-decoration: none;
    transition: 0.3s ease;
    padding: 0 20px;
    text-align: center;

    &:hover {
        border: 4px solid;
        border-color: ${({primary}) => (primary ? "#fff" : "000")};
        color: ${({primary}) => (primary ? "002f34"  : "#000"  )};
        background-color: transparent;

    }

    p {
        font-size: 16px;
        padding: 0;
        font-weight: 600;
    }
`


const Button = ({primary,text}) => {
    return (
        <ButtonWrapper primary={primary}>
            {/* <ButtonText> */}
                <p>{text}</p>
            {/* </ButtonText> */}
        </ButtonWrapper>
    )
}

export default Button
