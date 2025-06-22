
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
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-gray-300">
            Have questions? Need support? We're here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-dark">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    rows={6}
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                </div>

                <Button type="submit" className="btn-yellow w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
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
        </div>

        {/* Response Time */}
        <div className="text-center mt-12">
          <Card className="card-dark inline-block">
            <CardContent className="p-6">
              <p className="text-gray-300">
                ⚡ <strong>Quick Response Promise:</strong> We aim to respond to all inquiries within 24 hours, 
                often much sooner. Your success is our priority!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
