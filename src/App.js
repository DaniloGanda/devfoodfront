import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Container, Menu, PageBody } from './StyledApp';
import MenuItem from './components/MenuItem/index';
import PrivetRouter from './components/PrivateRouter';
import Cart from './components/Cart/index';
import ReactTooltip from 'react-tooltip';

import HomeScreen from './pages/HomeScreen';
import Tela2Screen from './pages/Tela2Screen';

export default () => {
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
                <Menu>
                    <MenuItem title="Loja" icon="/assets/store.png" link="/"/>
                    <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders"/>
                    <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile"/>
                </Menu>
                <PageBody>
                    <Switch>
                        <Route exact path="/">
                            <HomeScreen />
                        </Route>
                        <PrivetRouter path="/orders">
                            <div>Tela orders</div>
                        </PrivetRouter>
                        <PrivetRouter path="/profile">
                            <div>Tela profile</div>
                        </PrivetRouter>
                        <Route path="/tela2/:nome">
                            <Tela2Screen />
                        </Route>
                    </Switch>
                </PageBody>
                <Cart>

                </Cart>
                <ReactTooltip id="tip-top" place="top" effect="solid"/>
                <ReactTooltip id="tip-right" place="right" effect="solid"/>
            </Container>
            
        </BrowserRouter>
    );
}