import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/SearchSharp';
import ShoppingBasketIcon from  '@material-ui/icons/ShoppingBasket'
import { useStateValue } from '../../Context/StateProvider';
import { auth } from '../../Firebase';
function Header() {
    const [{basket,user},dispatch] = useStateValue()
    console.log(basket);
    const login=()=>{
        if(user){
            auth.signOut()
        }
    }
    return (
        <nav className="header">
        <Link to='/'>
            <img src="https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white.png" alt="Amazon" className="header-logo" />
        </Link>
        <div className='header-search'>
        <input type='text' className='header-searchinput'/>
        <SearchIcon className='header-searchicon'/>
        </div>

        {/* 3 links of nav */}
        <div className="header-nav">
            <Link className='header-link' to={!user && '/login'}>
            <div onClick={login} className='header-option'>
                <span className="header-option-line1">Hello {user?.email} </span>
                <span className="header-option-line2">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
            </Link>
            <Link className='header-link'>
            <div className='header-option'>
                <span className="header-option-line1" >Return</span>
                <span className="header-option-line2">& Orders</span>
            </div>
            </Link>
            <Link className='header-link'>
            <div className='header-option'>
                <span className="header-option-line1">Your</span>
                <span className="header-option-line2">Prime</span>
            </div>
            </Link>

            <Link to='/checkout'>
                <div className="header-option-basket">
                    {/* shopping icon basket */}
                    <ShoppingBasketIcon/>
                    {/* no. of items in basket */}
                    <span className="header-option-line2 header-basketCount">{basket?.length}</span>

                </div>
            </Link>
        
        </div>
        </nav>

    )
}

export default Header
