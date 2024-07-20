import "./contact.scss";

import ContactForm from "@/components/contact/form";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function Contact() {
  return (
    <main>
      <div className="footer-together">
        <Header />
        <ContactForm />
        <Footer />
      </div>
    </main>
  );
}
