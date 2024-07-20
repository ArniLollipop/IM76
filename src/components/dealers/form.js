import "../shared/form/form.scss";

export default function DealerForm() {
  return (
    <section className="feedback section dealer-form">
      <div className="container">
        <h3 className="transparent-text">place your pre-launch </h3>
        <h3 className="feedback-right__h3">order and get 10% off</h3>
        <form action="#">
          <div className="main-form__fields">
            <label htmlFor="Company name*">
              Company name*
              <input type="text" name="Company name*" id="Company name*" />
            </label>
            <label htmlFor="Company name*">
              Company website*
              <input
                type="text"
                name="Company website*"
                id="Company website*"
              />
            </label>

            <label htmlFor="Country/Region" className="col-span-2">
              Country/Region
              <input type="text" name="Country/Region*" id="Country/Region" />
            </label>
            <label htmlFor="State/Region*">
              State/Region*
              <input type="text" name="State/Region*" id="State/Region*" />
            </label>
            <label htmlFor="City*">
              City*
              <input type="text" name="City*" id="City*" />
            </label>
            <label htmlFor="First name*">
              First name*
              <input type="text" name="First name*" id="First name*" />
            </label>
            <label htmlFor="Last name*">
              Last name*
              <input type="text" name="Last name*" id="Last name*" />
            </label>
            <label htmlFor="Phone number*">
              Phone number*
              <input type="text" name="Phone number*" id="Phone number*" />
            </label>
            <label htmlFor="Email*">
              Email*
              <input type="email" name="Email*" id="Email*" />
            </label>
            <label htmlFor="What is your сurrent role?*" className="col-span-2">
              What is your сurrent role?*
              <input
                type="text"
                name="What is your сurrent role?*"
                id="What is your сurrent role?*"
              />
            </label>
            <label htmlFor="Message" className="col-span-2">
              Message
              <textarea
                name="Message"
                id="Message"
                cols="30"
                rows="10"></textarea>
            </label>

            <div className="radio col-span-2">
              <p>Company's customer base*</p>

              <input
                id="Civilian / Retail Consumer"
                type="radio"
                name="Company's customer base*"
              />
              <label htmlFor="Civilian / Retail Consumer">
                Civilian / Retail Consumer
              </label>

              <input
                id="Police Agency"
                type="radio"
                name="Company's customer base*"
              />
              <label htmlFor="Police Agency">Police Agency</label>

              <input
                id="EMS / Fire Departments"
                type="radio"
                name="Company's customer base*"
              />
              <label htmlFor="EMS / Fire Departments">
                EMS / Fire Departments
              </label>

              <input
                id="Military"
                type="radio"
                name="Company's customer base*"
              />
              <label htmlFor="Military">Military</label>
            </div>

            <p className="col-span-2">
              MASADA HLS will only use your personal information to provide
              account, order, and product information per your request. If you
              do not consent, we cannot contact you with order information or in
              response to customer service inquiries. If you consent to us
              contacting you, please select your communication preferences
              below.
            </p>

            <div className="radio col-span-2">
              <input id="agree" type="radio" name="agree" />
              <label htmlFor="agree">
                I agree to receive other communications from MASADA HLS.
              </label>
            </div>
            <p className="col-span-2">
              You may unsubscribe from these communications at any time. For
              more information on how to unsubscribe, our privacy practices, and
              our commitment to protecting and respecting your privacy, please
              visit our Privacy Policy. By clicking submit below, you consent to
              allow MASADA HLS to store and process the personal information
              submitted above to provide you the content requested.
            </p>
          </div>
          <button type="submit">submit application</button>
        </form>
      </div>
    </section>
  );
}
