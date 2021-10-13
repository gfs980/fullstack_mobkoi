import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout: React.FC = (props) => {
    return (
        <>
            <nav>
                <div className="navigation__group">
                    <NavLink to='/' activeClassName='current' className="link-main">
                        All Campaigns
                    </NavLink>
                    <NavLink to='/create' activeClassName='current' className="link-add">
                        Create Campaign
                    </NavLink>
                </div>
            </nav>
            <main>
                <div className='content'>
                    {props.children}
                </div>
            </main>
        </>
    )
}

export default Layout