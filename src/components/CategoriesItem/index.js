import React from 'react';
import {Container, CategoriesImage } from './styled';

export default ({data, activeCategory, setActiveCategory}) => {
    const handleCategoryClick = ()=>{
        setActiveCategory(data.id);
    } 

    return(
        <Container data-tip={data.name} data-for="tip-top" active={activeCategory} id={data.id} onClick={handleCategoryClick}>
            <CategoriesImage src={data.image}/>
        </Container>
    );
} 