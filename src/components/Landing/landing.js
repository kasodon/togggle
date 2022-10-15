import ball from '../../assets/ball.svg';
import illus from '../../assets/security.svg';
import privacy from '../../assets/private.svg';
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
                       <h1>Identity <span>Verification.</span> Decentralised.</h1>
                       <p>We’re using blockchain technology to help businesses effortlessly verify their customers’ identity whilst decentralising data storage and empowering individuals to have better control of their personal data.</p>
                       <button>Book a Demo <span>
                       <svg width="25" height="14" viewBox="0 0 45 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.4481 13.7591L31.2866 0.548391C30.9325 0.208882 30.4595 0.0214931 29.969 0.0263367C29.4784 0.0311803 29.0092 0.227871 28.6619 0.574307C28.3145 0.920742 28.1166 1.38939 28.1105 1.87994C28.1043 2.37048 28.2904 2.84394 28.629 3.19897L38.5212 13.1263H1.8772C1.62149 13.1106 1.36528 13.1475 1.12434 13.2346C0.883402 13.3216 0.662838 13.4571 0.476227 13.6326C0.289616 13.8081 0.140908 14.02 0.0392584 14.2552C-0.062391 14.4903 -0.11483 14.7438 -0.11483 15C-0.11483 15.2562 -0.062391 15.5097 0.0392584 15.7448C0.140908 15.98 0.289616 16.1918 0.476227 16.3674C0.662838 16.5429 0.883402 16.6784 1.12434 16.7654C1.36528 16.8525 1.62149 16.8894 1.8772 16.8737H38.6689L28.636 26.794C28.4452 26.9637 28.2909 27.1705 28.1828 27.4018C28.0746 27.6332 28.0147 27.8841 28.0069 28.1394C27.9991 28.3947 28.0434 28.6488 28.1372 28.8864C28.231 29.1239 28.3722 29.3398 28.5523 29.5209C28.7324 29.7019 28.9476 29.8443 29.1846 29.9394C29.4216 30.0344 29.6756 30.0801 29.9309 30.0736C30.1862 30.0671 30.4375 30.0086 30.6694 29.9017C30.9013 29.7947 31.1089 29.6416 31.2796 29.4516L44.4411 16.4167C44.6158 16.2423 44.7544 16.0352 44.849 15.8072C44.9436 15.5792 44.9923 15.3347 44.9923 15.0879C44.9923 14.841 44.9436 14.5966 44.849 14.3686C44.7544 14.1406 44.6158 13.9334 44.4411 13.7591H44.4481Z" fill="white"/>
</svg>
                           </span></button>
                   </div>
                   <div className="content-illus">
                   <object data={illus} type="image/svg+xml" title="illustration" alt="ball">
        <p>No SVG support, here's a substitute</p>
        <img src={illus} alt="illustration" />
      </object>
                   </div>
               </div>
           </div>
           <div className="how">
               <div className="how-title">
                   <h2>How it works</h2>
               </div>
               <div className="how-content">
                   <div className="how-box b">
                       <div className="how-icon">
                       <object className="thunder" data={privacy} type="image/svg+xml" title="thunder" alt="thunder">
        <p>No SVG support, here's a substitute</p>
        <img src={privacy} alt="thunder" />
      </object>
                       </div>
                       <h4>Instant onboarding</h4>
                       <p>We’ve designed a frictionless onboarding flow that means our ecosystem of customers only ever have to complete onboarding once. When they join a company already using Togggle they are instantly verified.</p>
                   </div>
                   <div className="how-box">
                       <div className="how-icon">
                       <object className="storage" data={privacy} type="image/svg+xml" title="storage" alt="storage">
        <p>No SVG support, here's a substitute</p>
        <img src={privacy} alt="storage" />
      </object>
                       </div>
                       <h4>Decentralised storage</h4>
                       <p>The majority of KYC providers operate in a centralised environment exposing them and their customers to data breaches. At Togggle we use blockchain technology to decentralise data storage, protecting you and your customers.</p>
                   </div>
                   <div className="how-box e">
                       <div className="how-icon">
                       <object className="privacy" data={privacy} type="image/svg+xml" title="privacy" alt="ball">
        <p>No SVG support, here's a substitute</p>
        <img src={privacy} alt="privacy" />
      </object>
                       </div>
                       <h4>Compliance ready</h4>
                       <p>Keeping up with everchanging compliance is time consuming and expensive. Focus on what matters most, scaling your business, and leave the identity verification, compliance and storage to us.</p>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default Landing