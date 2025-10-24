import ContactForm from "../../components/ContactForm";
export const metadata = { title: "Contact — Honeysuckles Design" };

export default function ContactPage(){
  return (
    <section className="section">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="h2 text-center">Let’s grow something beautiful</h1>
        <p className="p-lead text-center mt-3">Tell us about your project and timeline.</p>
        <ContactForm />
      </div>
    </section>
  );
}
