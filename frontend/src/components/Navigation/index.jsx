import { Outlet, Link } from "react-router-dom";
import styles from './style.scss';

export default function Navigation() {
    return (
        <main style={styles}>
            <div className="main-navbar" style={styles}>

                <div className="upper-nav">

                </div>

                <Outlet />
            </div>
        </main>

    )
}