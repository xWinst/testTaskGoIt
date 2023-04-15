import { NavLink } from 'react-router-dom';
import { Icon } from 'components';
import s from './Header.module.css';

const getClass = isActive => (isActive ? s.active : s.link);

const Header = () => {
    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <NavLink to="/" className={s.logo}>
                    <Icon icon="logo" cn={s.icon} w={114} h={33} />
                </NavLink>
                <div className={s.mainNav}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => getClass(isActive)}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/tweets"
                        className={({ isActive }) => getClass(isActive)}
                    >
                        Tweets
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;
