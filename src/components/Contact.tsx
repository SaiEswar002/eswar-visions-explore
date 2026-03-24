import { useState, useEffect } from "react";
import { Mail, Github, Linkedin, Instagram, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init('tKQGIweSmVXzZbzKj');
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log('Sending email with EmailJS...');

      // Send email using EmailJS
      const response = await emailjs.send(
        'service_zrd6rue',
        'template_jo3q4uc',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      );

      console.log('EmailJS Response:', response);

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      console.error('Error details:', error.text || error.message);

      toast({
        title: "Error",
        description: error.text || "Failed to send message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: "Portfolio Website",
      icon: Mail,
      url: "mailto:saieswar2k5@gmail.com",
      label: "saieswar2k5@gmail.com"
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/SaiEswar002",
      label: "GitHub Profile"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/sai-eswar-b04240286/",
      label: "LinkedIn Profile"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/sai._.eswar/",
      label: "Instagram Profile"
    }
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
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                  />
                </div>
              </div>

              <div>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 resize-none"
                />
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
