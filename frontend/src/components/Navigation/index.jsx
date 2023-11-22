import { Outlet, Link } from "react-router-dom";
import styles from './style.scss';
import emailVector from '../../assets/icons/email-vector.png';
import phoneVector from '../../assets/icons/phone-vector.png'

export default function Navigation() {
    return (
        <main style={styles}>
            <nav className="main-navbar" style={styles}>
                <div className="upper-nav">
                    <div className="left-nav">
                        <a href="mailto:elmurodazodov777@gmail.com">
                            <img src={emailVector} width="15" height="15" />
                            elmurodazodov777@gmail.com
                        </a>
                        <span>
                            <img src={phoneVector} width="15" height="15" />
                            (+998) 917026510
                        </span>
                    </div>
                    <div className="right-nav"></div>
                </div>
            </nav>
            <Outlet />
        </main>
    )
}