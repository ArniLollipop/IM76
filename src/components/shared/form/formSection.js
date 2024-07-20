import Image from "next/image";
import Form from "./form";

export default function FormSection() {
  return (
    <section className="section main-form">
      <div className="container">
        <Form isSection={true} />
        <Image src="/flag.png" width={773} height={544} alt="Flag" />
      </div>
    </section>
  );
}
