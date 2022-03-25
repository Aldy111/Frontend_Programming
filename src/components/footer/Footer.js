import styles from "./Footer.module.css";
const Footer = () => {
    return (
        <div className = {styles.container}>
            <footer className = {styles.footer}>
                <h2 className = {styles.footer__title}>Footer Movie App</h2>
                <p className = {styles.footer__author}>created by Aldy</p>
            </footer>
        </div>
    )
}

//export Footer
export default Footer;