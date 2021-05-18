import React from 'react';
import {CartArea, CartHeader, CartBody, CartIcon, CartTexT} from'./styled';

export default () => {
    return(
        <CartArea>
            <CartHeader>
                <CartIcon src="/assets/cart.png"/>
                <CartTexT>Meu Carrinho (x)</CartTexT>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>
    );
}