import logoWhite from '../assets/LOGO_white.png'

export default function Footer () {
    return (
        <footer className="footer">
            <img src={logoWhite} alt="logo KASA" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}