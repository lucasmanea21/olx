import React,{useEffect,useState} from 'react'
import Product from './Product'
import Data from '../../Data/ProductData.json'
import {ProductsSectionDiv,ButtonWrapper, ProductsSectionWrapper,ProductSectionTitle} from './ProductComponents'
import Button from '../Button'

const ProductSection = () => {
    const [more, setMore] = useState(false)
    const [visibility, setVisibility] = useState(true)
    const handleMore = () => {
        setVisibility(false)
        setMore(true);
    }

    let index= null;
    if(more) {
        index = 32;
    } else {
        index = 16;
    }
    
   
    
    const data= Data.slice(0,index).map((item, key) => (
            <Product src={item.src}
                title={item.title}
                time ={item.time} 
                place={item.place}
                price={item.price}
                delivery={item.delivery}
                key={key}/>
            ))  
     return (
        <>
        <ProductsSectionDiv>
             <ProductSectionTitle>
                 <p>Anunturi promovate</p>
             </ProductSectionTitle>
        <ProductsSectionWrapper>
          {data}
        </ProductsSectionWrapper>
        <ButtonWrapper onClick={handleMore} visibility={visibility}>
        <Button primary={false} text='Vezi mai mult' />
        </ButtonWrapper> 
       </ProductsSectionDiv>
        
        
        </>
   )
}

export default ProductSection
