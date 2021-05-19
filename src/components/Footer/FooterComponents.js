import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaFacebook} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'
import {AiFillYoutube} from 'react-icons/ai'

export const FooterSection = styled.div `
    background-color: #f2f4f5;
    border-top: 1px solid;
    display: block;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    @media screen and (max-width: 768px) {

    }
`
export const FooterContent = styled.div `
    display:flex;
    font-weight: 500;
    padding: 0 24px;
    margin:  0 10%;
    max-width: 100%;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        padding: 0;
    }
`
export const FooterColumn1 = styled.div `
    width: 30%;
`
export const FooterColumn2 = styled.div `
    width: 30%;
`
export const FooterSocialColumn = styled.div `

     div {
        display: flex;
        margin: 10px 0;
    }
`
export const FooterItem = styled(Link)`
    display:block;
    text-decoration: none;
    color:#000;
    margin: 10px 0;
`
export const SocialMediaIcons = styled.div `

`

export const FacebookIcon = styled(FaFacebook) `
    height: 30px;
    width: 30px;
    margin-left: 12px;
`
export const InstagramIcon = styled(GrInstagram) `
    height: 30px;
    width: 30px;
    margin-left: 12px;
`
export const YoutubeIcon = styled(AiFillYoutube) `
    height: 30px;
    width: 30px;
    margin-left: 12px;
`

export const AppDownloadIcons = styled.div`
    display: flex;
    flex-wrap: wrap;
    
    img {
        height: 48px;
        width: 140px;

    }
`
export const AppStoreIcon = styled(Link)`
    display: flex;
`
export const GooglePlayIcon = styled(Link)`
display: flex;`
export const AppGaleryIcon = styled(Link)`
display: flex;
`
export const Credits = styled.div `
display:flex;
justify-content: center;

    a {
        margin-bottom :0;
        text-decoration:none;
        
            color: red;
       
    }
`

