export default function ContactUs(){
  return (
    <div className="modal fade" id="modalCta" tabIndex={-1} role="dialog" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h4>Contact Us</h4>
            <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
          </div>
          <div className="modal-body">
            <form className="rd-form rd-form-variant-2 rd-mailform" data-form-output="form-output-global" data-form-type="contact-modal" method="post" action="bat/rd-mailform.php">
              <div className="row row-14 gutters-14">
                <div className="col-12">
                  <div className="form-wrap">
                    <input className="form-input" id="contact-modal-name" type="text" name="name" data-constraints="@Required" />
                    <label className="form-label" htmlFor="contact-modal-name">Your Name</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-wrap">
                    <input className="form-input" id="contact-modal-email" type="email" name="email" data-constraints="@Email @Required" />
                    <label className="form-label" htmlFor="contact-modal-email">E-mail</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-wrap">
                    <input className="form-input" id="contact-modal-phone" type="text" name="phone" data-constraints="@Numeric" />
                    <label className="form-label" htmlFor="contact-modal-phone">Phone</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-wrap">
                    <label className="form-label" htmlFor="contact-modal-message">Message</label>
                    <textarea className="form-input textarea-lg" id="contact-modal-message" name="message" data-constraints="@Required"></textarea>
                  </div>
                </div>
              </div>
              <button className="button button-primary button-pipaluk" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
