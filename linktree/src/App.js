import './App.css';

function App() {
  return (
    <div className="link-tree">
      <div className="header-image-container">
      <img src={`${process.env.PUBLIC_URL}/assets/images/header-img.jpg`} alt="header-img" />  
      <a className="header-image-label" href="https://twitter.com/okikiola_eniola">Okikiola O Farominiyi</a>
        </div>

        <div className="link-container">
         
          <a id="btn__zuri" href="https://training.zuri.team/">Zuri Team</a>
          <a id="books" href="http://books.zuri.team">Zuri Books</a>
          <a id="book__python" href="https://books.zuri.team/python-for-beginners?ref_id=<Opeyemi Okikiola Farominiyi>">Python Book</a>
          <a id="pitch" href="https://background.zuri.team">Background Check for Coders</a>
          <a id=" book__design" href="https://books.zuri.team/design-rules">Design Books</a>
        </div>

        <div className="social-link">
        <a className="slack" href="http://hng9.slack.com">   <img src={`${process.env.PUBLIC_URL}/assets/images/slack-icon.png`} alt="slack-icon" /></a>

        <a className="github" href="https://github.com/okikiola94">   <img src={`${process.env.PUBLIC_URL}/assets/images/github-icon.png`} alt="github-icon" /></a>
        </div>
     
     <footer className="footer-container">


     <div className="Zuri-container">
<img src={`${process.env.PUBLIC_URL}/assets/images/Zuri.Internship_Logo.png`} alt="Zuri-icon" />
</div>

<div className="text-container">
<p>HNG Intership 9 Frontend Task</p>
</div>

<div className="I4g-container">
<img src={`${process.env.PUBLIC_URL}/assets/images/I4G.png`} alt="I4G-icon" />
</div>

     </footer>
    </div>
  );
}

export default App;
