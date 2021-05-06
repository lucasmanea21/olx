import React from 'react'
import styled from 'styled-components'
import svg from '../../images/svg-2.svg'
import Button from '../Button'

export const InfoSectionWrapper = styled.div `
    height: 130px;
    background-color: #002f34;
    display: flex;
    align-items: center;
    justify-content: center;


    
`
export const InfoContent = styled.div `
    display:flex;
    justify-content:center;


    div {
        margin-right: 70px;

        @media screen and (max-width: 768px) {
            margin-right: 0;
        }
    }
`
export const InfoImage = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    /* overflow: hidden; */

    img {
        height: 130px;
        width: 130px;
    }
`
export const InfoSlogan = styled.div `
    color: #fff;
    display:flex;
    flex-direction:column;
    justify-content: center;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`
export const InfoBtnWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content:center;

    &:hover {
        background-color:transparent ;
       p{
        color: #fff;   
       } 
    }
    
`
export const InfoTopline = styled.div `
    color: #7f9799;
    display:flex;

    @media screen and (max-width: 720px) {
        font-size: 12px;
    }
`
export const InfoText = styled.div `
    display:flex;
    font-size: 20px;
    font-weight: 500;


    @media screen and (max-width: 720px) {
        font-size: 14px;
    }
`


const InfoSection = () => {
    return (
        <InfoSectionWrapper>
            <InfoContent>
                <InfoImage>
                <img src={svg} />
                </InfoImage>
                <InfoSlogan>
                    <InfoTopline>
                    Crește-ți afacerea pe OLX!
                    </InfoTopline>
                    <InfoText>
                    Descoperă oferta olx pentru afaceri
                    </InfoText>
                </InfoSlogan>
                <InfoBtnWrapper>
                <Button text='Vezi mai multe detalii' primary={true}></Button>
                </InfoBtnWrapper>
            </InfoContent>
        </InfoSectionWrapper>
    )
}

export default InfoSection
