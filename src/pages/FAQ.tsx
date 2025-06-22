
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I access the planner after purchase?",
      answer: "Immediately after purchase, you'll receive an email with download links and access instructions. You can access the digital planner through any web browser on desktop, tablet, or mobile."
    },
    {
      question: "Can I use it on both mobile and desktop?",
      answer: "Absolutely! The Business Planner is fully responsive and works seamlessly across all devices. Your data syncs automatically so you can plan on-the-go or at your desk."
    },
    {
      question: "Is this a one-time payment or subscription?",
      answer: "This is a one-time purchase for $4.99 (50% off the regular price). No monthly fees, no hidden costs, no subscriptions. You own it forever!"
    },
    {
      question: "What if I'm not satisfied with my purchase?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied with the Business Planner, just contact us within 30 days for a full refund."
    },
    {
      question: "Do I need special software to use this?",
      answer: "No special software required! The digital planner works in any modern web browser. For the printable PDFs, you'll just need a PDF reader (which comes standard on most devices)."
    },
    {
      question: "Can I print the planner pages?",
      answer: "Yes! The package includes high-quality printable PDF templates for daily, weekly, and monthly planning pages, plus motivational quote posters."
    },
    {
      question: "Will I receive updates?",
      answer: "Yes! Your one-time purchase includes lifetime access to updates and new features as we continue to improve the Business Planner."
    },
    {
      question: "Is my data secure and private?",
      answer: "Absolutely. All your planning data is stored securely and privately. We never share your personal information or planning data with third parties."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white section-padding">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl text-gray-300">
            Everything you need to know about the Business Planner
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="space-y-6 mb-12">
          {faqs.map((faq, index) => (
            <Card key={index} className="card-dark">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-yellow-400">
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Have Questions */}
        <Card className="card-dark text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help!
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link to="/contact">
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black">
                  Contact Support
                </Button>
              </Link>
              <Link to="/buy">
                <Button className="btn-yellow">
                  Buy Now - $4.99
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FAQ;
