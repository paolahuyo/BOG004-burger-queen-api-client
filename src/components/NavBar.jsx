import { NavLink } from 'react-router-dom'
import styles from '../components/stylesheets/NavBar.module.css';

export default function NavBar() {
    return (
        <div className={styles.NavBar}>
            <ul>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/'>Home</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/login'>Login</NavLink>
                </li>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'active' : ''} to='/admin'>Admin Panel</NavLink>
                </li>
            </ul>
        </div>
    )
}