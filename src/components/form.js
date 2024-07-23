"use client";

import axios from "axios";

export default function Form() {
  async function handleForm(e) {
    e.preventDefault();
    await axios
      .post(
        "https://www.zohoapis.com/bigin/v1/Contacts",
        {
          data: [
            {
              Last_Name: "Test",
              First_Name: "test",
              Email: "test@zylker.com",
            },
          ],
          trigger: ["approval", "workflow"],
        },
        {
          headers: {
            Authorization:
              "Zoho-oauthtoken 1000.6e9114b7ea68bf4bfa8b2b8bf55c06fb.dafabaa2b537942a9ef0de464a31b92c",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <form onSubmit={handleForm} className="launch-form">
      <div className="launch-form__fields">
        <div className="launch-form__grid">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="email" />
          <input type="tel" placeholder="Phone" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="No. of units" />
        <textarea placeholder="Message"></textarea>
      </div>
      <button type="submit" className="launch-form__submit">
        send
      </button>
    </form>
  );
}
