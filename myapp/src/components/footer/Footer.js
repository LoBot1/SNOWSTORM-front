import React from "react";
import  '../../style/footer.css';
import discordLogo from '../../img/pngegg.png';
import youtubeLogo from '../../img/youtube.png';
import twitterLogo from '../../img/twitter.png';

const Footer = () => {
  return (
      <footer>
        <div className="container">
          <div className="footerTitle">
            <img className="footerLogo" src="https://media.discordapp.net/attachments/1067015324530118716/1067408658713018458/Capture_1.png" alt="SnowStorm logo"></img>
            <h2>
            SnowStorm
            </h2>
          </div>

            <ul className="listeFooter">
              <li><a href="/Products">Produits</a></li>
              <li><a href="/Aboutus">A propos de nous</a></li>
              <li><a href="/FAQ">FAQ</a></li>
              <li><a href="/Support">Support</a></li>
              <li><a href="/Contact">Nous contacter</a></li>
              <li><a href="/Mentions">CGV CGU</a></li>
            </ul>
          <ul className="contactFooter">
          <h2>Follow SnowStorm</h2>
            <li className="discord"><a href="https://discord.gg/t3HYTXgBEM%22%3E"><img src={discordLogo} alt="SnowStorm contact"></img></a></li>
            <li className="youtube"><a href="https://www.youtube.com/@snowstorm336%22%3E"><img src={youtubeLogo} alt="SnowStorm contact"></img></a></li>
            <li className="twitter"><a href="https://twitter.com/HaxTwoWater%22%3E"><img src={twitterLogo} alt="SnowStorm contact"></img></a></li>
          </ul>

        </div>
        <div className="copyright">
          <h2>@Copyright SnowStorm Project 2023</h2>
        </div>
      </footer>
  );
};
export default Footer;