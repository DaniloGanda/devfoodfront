import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container, CategoriesArea, CategoriesList } from './styled';
import Header from '../../components/Header/index';
import CategoriesItem from '../../components/CategoriesItem';
import ReactTooltip from 'react-tooltip';


import api from '../../api';

export default () => {
    const history = useHistory();
    const [HeaderSearch, setHeaderSearch] = useState('');
    const [categories, setCategories] = useState([]);

    const[ActiveCategory, setActiveCategory] = useState(0);

    useEffect(()=>{
        const getCategories = async ()=>{
            const cat = await api.getCategories();
            if(cat.error == ''){
                setCategories(cat.result);
            }
            //console.log(categories);
            ReactTooltip.rebuild();
        }
        getCategories();
    }, []);

    return (
        <Container>
            <Header search={HeaderSearch} onSearch={setHeaderSearch}/>
            {categories.length > 0 &&
                <CategoriesArea>
                    Selecione uma categoria
                    <CategoriesList>
                        <CategoriesItem data={{id: 0, name:'Todas as Categorias', image:'/assets/food-and-restaurant.png'}} activeCategory ={ActiveCategory} setActiveCategory={setActiveCategory}/>
                        {categories.map((item, index)=>(
                            <CategoriesItem key={index} data={item} activeCategory ={ActiveCategory} setActiveCategory={setActiveCategory}/>
                        ))}
                    </CategoriesList>
                </CategoriesArea>
            }           
        </Container>
    );
}