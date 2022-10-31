import "./footer.css";

function Footer() {
    return (
       <footer className="footer-container">
  <div className="footer-wrapper">
  <div className="footer-content">
       <div className="Zuri-container">
  <img src={`${process.env.PUBLIC_URL}/assets/images/Zuri.Internship_Logo.png`} alt="Zuri-icon" />
  </div>
  
  <div className="text-container">
  <p>HNG Intership 9 Frontend Task</p>
  </div>
  
  <div className="I4g-container">
  <img src={`${process.env.PUBLIC_URL}/assets/images/I4G.png`} alt="I4G-icon" />
  </div>
  </div>
  </div>
       </footer>
    );
  }
  
  export default Footer;