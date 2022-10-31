import "./stage1.css";
import { useState } from "react";
import PopUp from "../popup/popup";
const Stage1 =(props)=> {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
      <div className="link-tree">
        <div className="Main-section">
            <div className="Content">
        <div className="header-image-container">
        <img src={`${process.env.PUBLIC_URL}/assets/images/header-img.jpg`} alt="header-img" />  
        <div className="twitter">
        <a className="header-image-label" href="https://twitter.com/okikiola_eniola">Okikiola O Farominiyi</a>
          </div>

          <div className="avatar">
            <div className="avatar-content">
           <img onClick={() => {
          setIsNavExpanded(!isNavExpanded);}}className="web-content" src={`${process.env.PUBLIC_URL}/assets/images/Content.png`} alt="content" /> 
          {/* <img onClick={() => {
          setIsNavExpanded(!isNavExpanded);}} className="mobile-content" src={`${process.env.PUBLIC_URL}/assets/images/Contents.png`} alt="content" />  */}
            </div>
          </div>
          </div>
          {isNavExpanded && <PopUp exit={() => setIsNavExpanded(false)} />
      }
  
  <div className="link-section">
          <div className="link-container">
          <a  id="btn__zuri"  href="https://training.zuri.team/">Zuri Team</a>
            </div>
            <div className="link-container">
            <a id="books" href="http://books.zuri.team">Zuri Books</a>
            </div>
            <div className="link-container">
            <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<Opeyemi Okikiola Farominiyi>">Python Book</a>
            </div>
            <div className="link-container">
            <a id="pitch" href="https://background.zuri.team">Background Check for Coders</a>
            </div>
            <div className="link-container">
            <a id=" book__design" href="https://books.zuri.team/design-rules">Design Books</a>
          </div>
  </div>
  </div>
          <div className="social-link">
          <a className="slack" href="http://hng9.slack.com">   <img src={`${process.env.PUBLIC_URL}/assets/images/slack-icon.png`} alt="slack-icon" /></a>
  
          <a className="github" href="https://github.com/okikiola94">   <img src={`${process.env.PUBLIC_URL}/assets/images/github-icon.png`} alt="github-icon" /></a>
          </div>
          </div>
          </div>

          )}
            export default Stage1;