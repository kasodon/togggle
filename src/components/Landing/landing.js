import ball from '../../assets/ball.svg';
import illus from '../../assets/security.svg';
import './landing.scss';

function Landing() {
    return (
        <div className="landing">
           <div className="box">
           <object className="ball-1" data={ball} type="image/svg+xml" title="ball" alt="ball">
        <p>No SVG support, here's a substitute</p>
        <img src={ball} alt="ball" />
      </object>
      <object className="ball-2" data={ball} type="image/svg+xml" title="ball" alt="ball">
        <p>No SVG support, here's a substitute</p>
        <img src={ball} alt="ball" />
      </object>
      <object className="ball-3" data={ball} type="image/svg+xml" title="ball" alt="ball">
        <p>No SVG support, here's a substitute</p>
        <img src={ball} alt="ball" />
      </object>
               <div className="box-content">
                   <div className="content-text">
                       <h1>Identity Verification. Decentralised.</h1>
                       <p>We’re using blockchain technology to help businesses effortlessly verify their customers’ identity whilst decentralising data storage and empowering individuals to have better control of their personal data.</p>
                       <button>Book a Demo</button>
                   </div>
                   <div className="content-illus">
                   <object data={illus} type="image/svg+xml" title="illustration" alt="ball">
        <p>No SVG support, here's a substitute</p>
        <img src={illus} alt="illustration" />
      </object>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Landing