import { FaInstagram, FaGithub } from "react-icons/fa";
import "./footer.css"

const Footer = () => {
  return (
   <>
   <footer className="footer">
    <div className="footer__container container grid">
        <div className="footer__socials">
            <a href="https://instagram.com/isrifans" className="footer__social-link">
                <FaInstagram/>
            </a>

            <a href="https://github.com/sedanight" className="footer__social-link">
                <FaGithub/>
            </a>
        </div>
        <p className="footer__copyright text-cs">&copy; 2023 <span>Rahmad Zidani</span>. Credit to FajriJoy</p>
        <p className="footer__copyright text-cs">Developed by <span>RahmadChad</span></p>
    </div>
   </footer>
   </>
  )
}

export default Footer