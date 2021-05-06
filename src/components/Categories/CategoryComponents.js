import styled from 'styled-components'


export const CategoriesTitle = styled.h1 `
    display:flex;
    align-items:center;
    justify-content:center;
    color: #002f34;
`
export const CategoriesSectionDiv = styled.div `
    background-color: #fff;
    display: flex;
    justify-content:center;
    width: 100%;
    /* align-items:center; */
`
export const CategoriesWrapper = styled.div `
    display:flex;
    align-items:start;
    padding: 24px ;
    justify-content: flex-start;
    // flex-direction: row;
    flex-wrap:wrap;
    // margin: 0px 20px;
    // position: relative;
`

export const CategoriesDiv = styled.div `
    display:flex;
    justify-content:center;
    align-items:center;
`

export const CategoryWrapper = styled.div `
    width: 106px;
    margin: 15px;
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
    background:transparent;
    cursor: pointer;
    height:fit-content;

    &:hover p{
        background-color: #002f34;
        color: #fff;
    }
`
export const CategoryImage = styled.div `
    display:flex;
    align-items:center;
    
    justify-content:center;
`
export const Image = styled.img `
    width: 70px;
    height: 70px;
    overflow:hidden;
    border-radius: 50%;
    
`
export const CategoryText = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    align-text: center;
    overflow: auto;
    
`
export const CategoryP = styled.p `
    font-weight: 500;
    text-align: center;
    display:flex;
    justify-content:center;


    &:hover {
        background-color: #002f34;
        color: #fff;
    }
`