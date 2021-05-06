import styled from 'styled-components'

export const InfoWrapper = styled.div `
    background-color: #cbf7ee;
    text-align: center;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`
export const TitleWrapper = styled.div `
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
    color: #002f34;
    
    p {
        margin-top: 0;
    }
`
export const ParagraphWrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 820px;
    height: 120px; 
    max-width: 100%;
  
  p {
    font-size:14px;
     
  }  
`
export const MediaWrapper = styled.div `
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
`