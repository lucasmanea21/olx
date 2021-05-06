import styled from 'styled-components'

export const CautariSection = styled.div `
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 62px 0;
    margin: 0;
    width: 100%;
    background-color: #f2f4f5;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`
export const CautariWrapper = styled.div `
    display: flex; 
     justify-content: center;
    align-items: center; 
    width: 100%;
    max-width: 100%;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const CategoriiPrincipale = styled.div `
    display: flex;
    flex-direction: column;
    width: 484px;
    text-align: left;
    max-width: 100%;

    @media screen and (max-width: 768px) {
        justify-content: center;
        align-items: center;
    }
`
export const CategoriiImg = styled.div `
      @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const CategoriiImage = styled.img `
    height: 129px;
    width: 114px;
`

export const CategoriiP = styled.div ``
export const CautariFrecvente = styled.div `
    display: flex;
    flex-direction: column;
    width: 484px;
    margin-left: 60px;
    max-width: 100%;

    @media screen and (max-width: 768px ) {
        margin-left: 0;
        justify-content: center;
        align-items: center;
    }
`
export const CautariImg = styled.div ``
export const CautariImage = styled.img `
    height: 129px;
    width: 114px;
`
export const CautariP = styled.div ``