import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Message sent successfully! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        message: ""
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("");
      }, 5000);
    }, 1500);
  };
  return <section id="contact" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Feel free to reach out if you have any questions or would like to work together
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-1 text-foreground">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 bg-secondary text-foreground rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" required />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 text-foreground">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 bg-secondary text-foreground rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" required />
              </div>

              <div>
                <label htmlFor="message" className="block mb-1 text-foreground">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 bg-secondary text-foreground rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary/50" required></textarea>
              </div>

              {submitMessage && <div className="text-green-500">{submitMessage}</div>}

              <button type="submit" className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : <>
                    Send Message <Send size={16} />
                  </>}
              </button>
            </form>
          </div>

          <div className="md:w-1/2">
            <div className="bg-card p-8 rounded-lg shadow-sm border border-border h-full">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md text-primary shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Email</h4>
                    <a href="mailto:johndoe@example.com" className="text-muted-foreground hover:text-primary transition-colors">mbalutomaureen@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md text-primary shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Phone</h4>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary transition-colors">+254113058761</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-md text-primary shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-muted-foreground">Embu, Kenya</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-foreground hover:text-primary rounded-full transition-colors" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-foreground hover:text-primary rounded-full transition-colors" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary text-foreground hover:text-primary rounded-full transition-colors" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;