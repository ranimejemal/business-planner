import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300">
            Have questions? Need support? We're here to help!
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <section aria-labelledby="contact-form-heading">
            <Card className="card-dark">
              <CardHeader>
                <CardTitle id="contact-form-heading" className="text-2xl font-bold">Send us a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name <span className="text-red-400" aria-label="required">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="bg-gray-800 border-gray-700 text-white focus:ring-yellow-400 focus:border-yellow-400"
                      required
                      aria-required="true"
                      aria-describedby="name-error"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email <span className="text-red-400" aria-label="required">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-gray-800 border-gray-700 text-white focus:ring-yellow-400 focus:border-yellow-400"
                      required
                      aria-required="true"
                      aria-describedby="email-error"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-red-400" aria-label="required">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={6}
                      className="bg-gray-800 border-gray-700 text-white focus:ring-yellow-400 focus:border-yellow-400"
                      required
                      aria-required="true"
                      aria-describedby="message-error"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="btn-yellow w-full focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black"
                    aria-describedby="submit-help"
                  >
                    Send Message
                  </Button>
                  <p id="submit-help" className="sr-only">
                    Your message will be sent to our support team and we'll respond within 24 hours.
                  </p>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Contact Info */}
          <aside aria-labelledby="contact-info-heading">
            <h2 id="contact-info-heading" className="sr-only">Contact Information</h2>
            <div className="space-y-8">
              <Card className="card-dark">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-yellow-400">
                    📧 Email Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    For general inquiries, technical support, or pre-sale questions:
                  </p>
                  <a 
                    href="mailto:support@businessplanner.com" 
                    className="text-yellow-400 hover:text-yellow-300"
                  >
                    support@businessplanner.com
                  </a>
                  <p className="text-sm text-gray-400 mt-2">
                    We typically respond within 24 hours
                  </p>
                </CardContent>
              </Card>

              <Card className="card-dark">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-yellow-400">
                    💬 Follow Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Stay updated with productivity tips and planner updates:
                  </p>
                  <div className="space-y-2">
                    <a 
                      href="#" 
                      className="block text-yellow-400 hover:text-yellow-300"
                    >
                      @BusinessPlannerApp
                    </a>
                    <p className="text-sm text-gray-400">
                      Daily motivation and planning tips
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-dark">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-yellow-400">
                    🚀 Quick Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    Most common questions are answered in our FAQ section.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                    asChild
                  >
                    <a href="/faq">View FAQ</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </aside>
        </div>

        {/* Response Time */}
        <footer className="text-center mt-12">
          <Card className="card-dark inline-block">
            <CardContent className="p-6">
              <p className="text-gray-300">
                ⚡ <strong>Quick Response Promise:</strong> We aim to respond to all inquiries within 24 hours, 
                often much sooner. Your success is our priority!
              </p>
            </CardContent>
          </Card>
        </footer>
      </div>
    </div>
  );
};

export default Contact;
