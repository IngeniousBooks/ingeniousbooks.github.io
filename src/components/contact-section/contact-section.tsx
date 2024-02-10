import { ChangeEvent, FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

export default function ContactSection() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = {
      name: searchParams.get("contact-name"),
      email: searchParams.get("email"),
      message: searchParams.get("message"),
    };
    console.log(formData);
    setSearchParams([]);
  }

  function handleChange({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setSearchParams((prev) => {
      const newSearchParams = new URLSearchParams(prev);

      if (newSearchParams.has(name)) {
        newSearchParams.set(name, value);
      } else {
        newSearchParams.append(name, value);
      }

      return newSearchParams;
    });
  }

  return (
    <section className="contact-section">
      <h2 id="contact">Let's discuss your next project</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name{" "}
          <input
            type="text"
            name="contact-name"
            id="contact-name"
            value={searchParams.get("contact-name") || ""}
            onChange={handleChange}
            minLength={2}
            required
          />
        </label>
        <label>
          Email address
          <input
            type="email"
            name="email"
            id="email"
            value={searchParams.get("email") || ""}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            id="message"
            rows={8}
            value={searchParams.get("message") || ""}
            onChange={handleChange}
            minLength={25}
            required
          />
        </label>
        <button>Send</button>
      </form>
    </section>
  );
}
