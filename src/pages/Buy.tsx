
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import PaymentButton from "@/components/PaymentButton";

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

  const handleGuestCheckout = () => {
    // For guest checkout without Supabase auth
    console.log("Processing guest checkout...");
    alert("Thank you for your interest! Guest checkout coming soon. Please sign up for full access.");
  };

  return (
    <div className="min-h-screen bg-black text-white section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <header>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your <span className="gradient-text">Business Life</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Get instant access to the complete Business Planner system
          </p>
        </header>

        <main>
          <Card className="card-dark max-w-2xl mx-auto" role="main">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4" role="img" aria-label="Rocket emoji">🚀</div>
              <CardTitle className="text-2xl font-bold mb-2">The Ultimate Business Planner</CardTitle>
              <div className="space-y-2">
                <div className="text-gray-400 text-lg line-through" aria-label="Original price">$9.99</div>
                <div className="text-4xl font-bold text-yellow-400" aria-label="Current price">$4.99</div>
                <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm inline-block">
                  50% OFF - Limited Time!
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="text-left space-y-3">
                <h2 className="font-semibold text-lg mb-4">What you get:</h2>
                <ul className="space-y-3" role="list">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3" role="listitem">
                      <div className="bg-yellow-400 rounded-full p-1 flex-shrink-0" aria-hidden="true">
                        <Check className="text-black w-4 h-4" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <PaymentButton 
                  className="btn-yellow w-full text-lg py-6 pulse-glow mb-4"
                >
                  Buy Now - Secure Checkout - $4.99
                </PaymentButton>
                
                <Button 
                  onClick={handleGuestCheckout}
                  variant="outline" 
                  className="w-full mb-4 border-gray-600 text-gray-300 hover:bg-gray-800"
                  aria-label="Guest checkout option"
                >
                  Guest Checkout (No Account Required)
                </Button>
                
                <div className="text-sm text-gray-400 mt-4 space-y-1" role="list">
                  <p role="listitem">✅ Instant digital download</p>
                  <p role="listitem">✅ 30-day money-back guarantee</p>
                  <p role="listitem">✅ Secure payment processing</p>
                  <p role="listitem">✅ Compatible with all devices</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <aside className="mt-12 text-center">
            <blockquote className="text-xl italic text-gray-300 mb-4">
              "This planner completely transformed how I organize my business. 
              I'm more productive than ever!" - Sarah K.
            </blockquote>
            <div className="flex justify-center space-x-1 text-yellow-400 text-xl" role="img" aria-label="5 star rating">
              ⭐⭐⭐⭐⭐
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
};

export default Buy;
