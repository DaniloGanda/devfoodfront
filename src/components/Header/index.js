import React, {useState} from 'react';
import {Container, Logo, SearchInput} from './styled';

export default ({search, onSearch}) =>{
    const [Inputactive, setInputactive] = useState(search == '' ? false : true);

    const handleInputFocus = () =>{
        setInputactive(true);
    }

    const handleInputBlur = () =>{
        if(search == ""){
          setInputactive(false);
        }
    }

    const handleInputChange = (e)=>{
        onSearch(e.target.value);
    }
    return (
        <Container>
            <Logo src="/assets/logo.png"/>
            <SearchInput 
            type="text" 
            value={search}
            placeholder="Digite um produto..."
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onChange={handleInputChange}
            active={Inputactive}/>
        </Container>
    );
}