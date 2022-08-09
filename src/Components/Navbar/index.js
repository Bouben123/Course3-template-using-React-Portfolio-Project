import React  from 'react';
import { Link } from 'react-router-dom';
import { Linka, ListItem, Logo, LogoText, MyLink, NavbarSection, UlList} from './style.js';

const Navbar = () => {
    return (
        <NavbarSection>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <UlList>
                    <ListItem><MyLink to={'/'}>Home</MyLink></ListItem>
                    <ListItem><Linka href="#">Work</Linka></ListItem>
                    <ListItem><Linka href="#">Portfolio</Linka></ListItem>
                    <ListItem><Linka href="#">Resume</Linka></ListItem>
                    <ListItem><Linka href="#">About</Linka></ListItem>
                    <ListItem><MyLink to={'/contact'}>Contact</MyLink></ListItem>
                </UlList>
            </div>          
        </NavbarSection>     
    )
}

export default Navbar;