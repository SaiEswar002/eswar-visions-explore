import { useState } from "react";
import { Mail, Github, Linkedin, Instagram, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = { name: "", email: "", subject: "", message: "" };
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Enter a valid email.";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    else if (formData.message.trim().length < 10) newErrors.message = "Message must be at least 10 characters.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.values(validationErrors).some((err) => err !== "")) {
      setErrors(validationErrors);
      return;
    }
    setErrors({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(true);
    try {
      const response = await fetch("/.netlify/functions/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to send. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const socialLinks = [
    { name: "Email", icon: Mail, url: "mailto:saieswar2k5@gmail.com" },
    { name: "GitHub", icon: Github, url: "https://github.com/SaiEswar002" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/sai-eswar-b04240286/" },
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/sai._.eswar/" },
  ];

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
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-foreground">Message Sent!</h3>
                <p className="text-primary-foreground/70 text-center">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-primary-foreground/60 underline hover:text-primary-foreground transition-colors mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
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
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
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
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
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
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    maxLength={500}
                    rows={6}
                    className={`bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 resize-none ${errors.message ? "border-red-500 ring-1 ring-red-500" : ""}`}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message
                      ? <p className="text-red-400 text-xs">{errors.message}</p>
                      : <span />}
                    <p className="text-xs text-right text-primary-foreground/50 mt-1">
                      {formData.message.length} / 500
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-3 text-lg font-semibold rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
