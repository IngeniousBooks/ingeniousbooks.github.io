export default function ContactSection() {
  return (
    <section className="contact-section">
      <h2>Let's discuss your next project</h2>
      <form action="">
        <label>
          Name <input type="text" name="contact-name" id="contact-name" />
        </label>
        <label>
          Email address
          <input type="email" name="email" id="email" />
        </label>
        <label>
          Message
          <textarea name="message" id="message" rows={10} />
        </label>
        <button>Send</button>
      </form>
    </section>
  );
}
