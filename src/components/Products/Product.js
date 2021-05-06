import React from 'react'
import {ProductWrapper,DeliveryDiv, DeliveryImage, HeartIcon, ProductContent,ImageWrapper, Image,ProductTitle,ProductTimeLocation,ProductPrice, ProductHeart} from './ProductComponents'

const Product = ({src, title, place, time, price,alt,delivery}) => {
    return (
        <ProductWrapper>
            <ProductContent>
                
            <ImageWrapper>
                <Image src={src} alt={title}/>
                <DeliveryDiv delivery={delivery}>
                <DeliveryImage src='https://png.pngtree.com/png-vector/20190219/ourlarge/pngtree-delivery-truck-icon-graphic-design-template-vector-png-image_561943.jpg'/>
                </DeliveryDiv>
            </ImageWrapper>
                <ProductTitle>
                   <p>{title}</p>
                </ProductTitle>
                <ProductTimeLocation>
                        {place} - {time}
                </ProductTimeLocation>
                <ProductPrice>
                    {price}
                   <HeartIcon />
                </ProductPrice>
            
                   
                
            </ProductContent>
        </ProductWrapper>
    )
}

export default Product
