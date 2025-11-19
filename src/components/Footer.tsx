export default function Footer(){
  return (
    <footer className="section section-fluid footer-minimal context-dark">
      <div className="bg-gray-15">
        <div className="container-fluid">
          <div className="footer-minimal-inset oh">
            <ul className="footer-list-category-2">
              <li><a href="#">AI Automation</a></li>
              <li><a href="#">Windows/Mac OS SOFTWARE</a></li>
              <li><a href="#">Android/iOS Apps</a></li>
              <li><a href="#">Graphics design</a></li>
              <li><a href="#">Cloud Solutions</a></li>
              <li><a href="#">Customer Support</a></li>
            </ul>
          </div>
          <div className="footer-minimal-bottom-panel text-sm-left">
            <div className="row row-10 align-items-md-center">
              <div className="col-sm-6 col-md-4 text-sm-right text-md-center">
                <div>
                  <ul className="list-inline list-inline-sm footer-social-list-2">
                    <li><a className="icon fa fa-facebook" href="#"></a></li>
                    <li><a className="icon fa fa-google" href="https://www.vitohub.org/"></a></li>
                    <li><a className="icon fa fa-instagram" href="https://www.instagram.com/vitohub/"></a></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 order-sm-first">
                {/* Rights */}
                <p className="rights"><span>&copy;&nbsp;</span><span className="copyright-year"></span> <span>VitoTech</span>
                </p>
              </div>
              <div className="col-sm-6 col-md-4 text-md-right"><span>All rights reserved.</span> <span>Design&nbsp;by&nbsp;VitoTech Co.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
