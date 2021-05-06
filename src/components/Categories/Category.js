import React from 'react'
import {CategoryWrapper,CategoryImage, Image, CategoryText,CategoryP} from './CategoryComponents'

const Category = ({src,title}) => {
    return (
        <CategoryWrapper>
            <CategoryImage>
                <Image src={src}/>
            </CategoryImage>
            <CategoryText>
                <CategoryP>
                    {title}
                </CategoryP>
            </CategoryText>
        </CategoryWrapper>
    )
}

export default Category
