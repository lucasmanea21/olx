import {Link} from 'react-router-dom'
import styled from "styled-components";

export const SigninSection = styled.div `
    background-color: #3a77ff; 
    position: relative;
    width: 100%;
    display:flex;
    justify-content: center;
`
export const FormWrapper= styled.div `
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 336px;
    padding: 10px;
    margin: 30px;
`
export const NavMenu= styled.div `
    display:flex;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid;
    border-color: gray;
    font-size: 14px;
`

export const SignInBtn = styled(Link) `
    color: #000;
    width: 50%;
    height: 18px;
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-bottom: ${({signIn}) =>(signIn ? '3px solid' : '0')};
    
`

export const SignUpBtn = styled(Link) `
    color: #000;
    width: 50%;
    height: 18px;
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-bottom: ${({signIn}) =>(signIn ? '0' : '3px solid')};
`

export const SigninWithAccounts = styled.div `
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`
export const SigninFormDiv = styled.div `
    width: 100%;
    display:${({signIn}) =>(signIn ? 'flex' : 'none')};
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const EmailForm = styled.div `
    width: 100%;
    display:flex; 
    flex-direction: column; 

    p {
        padding-left: 5%;
    }
`
export const EmailInput = styled.div `
    display:flex; 
    flex-direction: column;
    align-items: center; 
    justify-content: center;

    input {
        padding: 16px 12px;
        width: 80%;
        background-color: #f2f4f5; 
        border: 0;
    }
`

export const PasswordForm= styled.div `
     width: 100%;
    display: flex;
    flex-direction: column;

    p {
        padding-left: 5%;
    }
`

export const PasswordInput= styled.div `
    width: 100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    input {
        padding: 16px 12px;
        width: 80%;
        background-color: #f2f4f5; 
        border: 0;
    }
`
export const ForgotPassword = styled(Link) `
    font-size: 14px;
    display:block;
    width: 100%;
    text-align: left;
    padding-left: 15%;
    text-decoration: none;
    color: #000;
`

export const SignUpFormDiv = styled.div `
    display: ${({signIn}) =>(signIn ? 'none' : 'flex')};
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

export const TermsDiv = styled.div `text-decoration
   display: flex;
   justify-content: center;
   align-items: center; 
   padding: 6%;
   p {
     font-size: 11px;  
   } 
`
export const SigninBtn = styled(Link) `
    background-color:#002f34;
    color: #fff;
    font-weight: 500;
    border: 2px solid;
    border-radius: 4px;
    display: block;
    align-items : center;
    text-decoration: none;
    transition: 0.3s ease;
    padding: 10px 20px;
    text-align: center;
    margin-bottom: 5px;
    width: 75%;

`
export const FbBtnWrapper = styled(Link) `
    background-color:#fff;
    color: #000;
    border: 2px solid;
    border-radius: 4px;
    display: block;
    align-items : center;
    text-decoration: none;
    transition: 0.3s ease;
    padding: 10px 20px;
    text-align: center;
    margin-bottom: 5px;
    width: 100%;
    margin-top: 37px;
`
export const GoogleBtnWrapper = styled(Link) `
    background-color:#fff;
    color: #000;
    border: 2px solid;
    border-radius: 4px;
    display: ${({showGoogle}) => (showGoogle ? 'block' : 'none')};
    align-items : center;
    text-decoration: none;
    transition: 0.3s ease;
    padding: 10px 20px;
    text-align: center;
    width: 100%;
    margin-bottom: 30px;
`

export const TermsWrapper = styled.div `
    font-size: 12px;
    display:block;
    text-align: center;
    padding: 0 37px;
`

export const AcordDiv = styled.div `
    display: flex;
`
export const AcordInput = styled.input `
    height: 24px;
    width: 24px;
`
export const AcordText = styled.p `
    font-size: 12px;
`

export const InputDiv = styled.div `
    display:flex;
`
