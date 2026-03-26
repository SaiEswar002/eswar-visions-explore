import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Instagram, Download, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from '@emailjs/browser';

const MAX_MESSAGE_LENGTH = 500;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    emailjs.init('tKQGIweSmVXzZbzKj');
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_zrd6rue',
        'template_jo3q4uc',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      setErrors({ submit: error.text || "Failed to send message. Please try again or email me directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const socialLinks = [
    { name: "Email", icon: Mail, url: "mailto:saieswar2k5@gmail.com" },
    { name: "GitHub", icon: Github, url: "https://github.com/SaiEswar002" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/sai-eswar-b04240286/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/sai._.eswar/" },
  ];

  if (isSuccess) {
    return (
      <section id="contact" className="red-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-[50vh] text-center">
          <div className="mb-6 animate-bounce-in">
            <CheckCircle2 className="w-24 h-24 text-green-300 mx-auto mb-4 animate-[scaleIn_0.6s_ease-out]" style={{ filter: "drop-shadow(0 0 16px rgba(134,239,172,0.7))" }} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Message Sent! 🎉</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-md">
            Thank you for reaching out! I'll get back to you as soon as possible.
          </p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 text-lg font-semibold rounded-lg"
          >
            Send Another Message
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="red-section py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-aos="fade-up">
            Do you want to know more about me?
          </h2>
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 text-lg font-semibold rounded-lg flex items-center gap-2 mx-auto"
            onClick={() => window.open("/Eswar_Resume.pdf", "_blank")}
          >
            <Download className="w-5 h-5" />
            Download Resume
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-8">Contact Me</h3>
            <div className="space-y-6 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Email</h4>
                <a
                  href="mailto:saieswar2k5@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  saieswar2k5@gmail.com
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors group"
                >
                  <link.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 ${errors.name ? "border-red-500 ring-1 ring-red-500" : ""}`}
                  />
                  {errors.name && <p className="text-red-300 text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 ${errors.email ? "border-red-500 ring-1 ring-red-500" : ""}`}
                  />
                  {errors.email && <p className="text-red-300 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 ${errors.subject ? "border-red-500 ring-1 ring-red-500" : ""}`}
                />
                {errors.subject && <p className="text-red-300 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength={MAX_MESSAGE_LENGTH}
                  rows={6}
                  className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 resize-none ${errors.message ? "border-red-500 ring-1 ring-red-500" : ""}`}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message
                    ? <p className="text-red-300 text-xs">{errors.message}</p>
                    : <span />}
                  <span className={`text-xs ml-auto ${formData.message.length > MAX_MESSAGE_LENGTH * 0.9 ? "text-red-300" : "text-primary-foreground/50"}`}>
                    {formData.message.length} / {MAX_MESSAGE_LENGTH}
                  </span>
                </div>
              </div>

              {errors.submit && (
                <p className="text-red-300 text-sm text-center">{errors.submit}</p>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-3 text-lg font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
