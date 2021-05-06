import styled from 'styled-components'
import {FiHeart} from 'react-icons/fi'
import {Link} from 'react-router-dom'

export const ProductWrapper = styled.div `
    width: 246px;
    height: 320px;
    background-color: #fff;
    margin-left: 15px;
    margin-top: 15px;
`

export const ProductContent = styled.div `
    display:flex;
    flex-direction:column;
    padding: 15px;
`
export const DeliveryDiv = styled.div `
    position:absolute;
    right: 23px;
    top: 115px;
    display:${({delivery}) => (delivery ? 'flex' : 'none')};
    align-items:center;
    justify-content:center;
`

export const DeliveryImage = styled.img `
    height: 32px;
    width: 32px;
    background-color: #fff;
    border-radius: 50%;
`

export const ImageWrapper = styled.div `
   display:flex;
   align-items:center;
   justify-content:Center;
   position:relative;
   cursor: pointer;
`
export const Image = styled.img `
    overflow:hidden;
    height:156px;
    width: 216px;
`

export const ProductTitle = styled.div `
    margin-bottom: 20px;
    display: flex;

    &:hover p{
        background-color: #002f34;
        color: #fff;
        cursor: pointer;
    }
`
export const ProductTimeLocation = styled.div `
    margin-bottom: 10px;
`
export const ProductPrice = styled.div `
    display:flex;
    justify-content:space-between;
`

export const HeartIcon = styled(FiHeart) `
    font-size: 1.5rem;
    color: #cbc7c7;

    &:hover {
        cursor: pointer;
    }
`

export const ButtonWrapper = styled(Link)`
    display:${({visibility}) => (visibility ? 'flex' : 'none')};
    align-items:center;
    justify-content: center;
    background-color: #f2f4f5 !important;
    text-decoration: none;
    margin-top: 30px;
`   

export const ProductsSectionWrapper = styled.div `
    display:flex;
    align-items:center;
    flex-direction: row;
    justify-content:Center;
    width: 100%;
    flex-wrap:wrap;
    padding: 0 calc(100% - 90%);
    /* margin-left: 50px;
    margin-right: 50px; */
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`

export const ProductSectionTitle = styled.div `
    display: block;
    text-align:center;
    padding: 10px;
    font-size: 32px;
    font-weight: 500;
    color: #002f34;
`

export const ProductsSectionDiv = styled.div `
    background-color : #f2f4f5;
    padding-bottom: 50px;
`