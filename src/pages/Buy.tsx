
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Buy = () => {
  const features = [
    "Complete digital planner system",
    "Daily, weekly, and monthly views",
    "Goal tracking and progress monitoring", 
    "Study/work session tracker",
    "Printable PDF templates",
    "Mobile and desktop access",
    "One-time purchase - no subscriptions",
    "Lifetime updates included"
  ];

  const handlePurchase = () => {
    // This would integrate with Stripe, Gumroad, or your payment processor
    console.log("Processing purchase...");
    // For now, just show an alert
    alert("Thank you for your interest! Payment integration coming soon.");
  };

  return (
    <div className="min-h-screen bg-black text-white section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Transform Your <span className="gradient-text">Business Life</span>
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Get instant access to the complete Business Planner system
        </p>

        <Card className="card-dark max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="text-6xl mb-4">🚀</div>
            <CardTitle className="text-2xl font-bold mb-2">The Ultimate Business Planner</CardTitle>
            <div className="space-y-2">
              <div className="text-gray-400 text-lg line-through">$9.99</div>
              <div className="text-4xl font-bold text-yellow-400">$4.99</div>
              <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm inline-block">
                50% OFF - Limited Time!
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="text-left space-y-3">
              <h3 className="font-semibold text-lg mb-4">What you get:</h3>
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-yellow-400 rounded-full p-1 flex-shrink-0">
                    <Check className="text-black w-4 h-4" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-6">
              <Button 
                onClick={handlePurchase}
                size="lg" 
                className="btn-yellow w-full text-lg py-6 pulse-glow"
              >
                Buy Now - Secure Checkout - $4.99
              </Button>
              
              <div className="text-sm text-gray-400 mt-4 space-y-1">
                <p>✅ Instant digital download</p>
                <p>✅ 30-day money-back guarantee</p>
                <p>✅ Secure payment processing</p>
                <p>✅ Compatible with all devices</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <blockquote className="text-xl italic text-gray-300 mb-4">
            "This planner completely transformed how I organize my business. 
            I'm more productive than ever!" - Sarah K.
          </blockquote>
          <div className="flex justify-center space-x-1 text-yellow-400 text-xl">
            ⭐⭐⭐⭐⭐
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;
