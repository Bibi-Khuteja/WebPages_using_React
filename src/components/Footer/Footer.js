import './Footer.scss'
import { FaFacebookSquare  } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

function Footer(){
    return(
        <>
       <footer className="footer py-5">
      <div className="container">
        <div className="row footer-row">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <h6 className="footer-head">HOME</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item foot-item"> Terms   </li>
              <li className="list-group-item foot-item">Licenses</li>
              <li className="list-group-item foot-item"> Market</li>
              <li className="list-group-item foot-item">API</li>
              <li className="list-group-item foot-item">Become an affiliate</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3">
            <h6 className="footer-head">ABOUT</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item foot-item"> Help    </li>
              <li className="list-group-item foot-item">Center</li>
              <li className="list-group-item foot-item"> Authors</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 ">
            <h6 className="footer-head">PLANS </h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item foot-item"> Blog   </li>
              <li className="list-group-item foot-item">Forums</li>
              <li className="list-group-item foot-item"> Meetups</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <div className="row">
              <div className="col-8">
                <div className="d-flex trolly">
                  <div>
                    
                    <p className="foot-item mb-0 mx-3"><FaFacebookSquare /></p>
                     
                  </div>
                  <div>
                    <p className="foot-item mb-0 mx-3"><FaTwitter /></p>
                     
                  </div>
                  <div>
                    <div>
                      <p className="foot-item mb-0 mx-3">
                        <FaInstagram/>
                      </p>
                        
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <hr className="m-4" />

          <p className="card-text2"> Price is in US dollars and excludes tax</p>
        <div className="d-flex trolly">
          <div>
            <p className="card-text2">© 2022 Envato Pty Ltd. Trademarks and brands are the property of their respective owners.</p>
          </div>
        </div>
      </div>
     

    </footer>
        </>
    )
}
export default Footer;