
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Download, ArrowRight } from "lucide-react";

const PaymentSuccess = () => {
  useEffect(() => {
    // You could trigger analytics or other post-purchase actions here
    console.log("Payment successful - user reached success page");
  }, []);

  return (
    <div className="min-h-screen bg-black text-white section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <header className="mb-12">
          <div className="flex justify-center mb-6">
            <CheckCircle className="w-24 h-24 text-green-400" aria-hidden="true" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Payment <span className="gradient-text">Successful!</span>
          </h1>
          <p className="text-xl text-gray-300">
            Thank you for purchasing the Ultimate Business Planner!
          </p>
        </header>

        <main>
          <Card className="card-dark mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-400">
                Your Digital Planner is Ready!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-300">
                You now have lifetime access to all planner features and future updates.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link to="/planner/dashboard">
                  <Button className="btn-yellow w-full" aria-label="Access your planner dashboard">
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Access Your Planner
                  </Button>
                </Link>
                
                <Link to="/planner/printables">
                  <Button 
                    variant="outline" 
                    className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                    aria-label="Download printable templates"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Printables
                  </Button>
                </Link>
              </div>

              <div className="border-t border-gray-700 pt-6">
                <h3 className="font-semibold text-lg mb-4">What's Next?</h3>
                <ul className="text-left space-y-2 text-gray-300" role="list">
                  <li role="listitem">✅ Set up your first goals in the Goals section</li>
                  <li role="listitem">✅ Start planning your daily tasks</li>
                  <li role="listitem">✅ Download and print your favorite templates</li>
                  <li role="listitem">✅ Track your productivity and celebrate wins!</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="card-dark">
            <CardContent className="p-6">
              <p className="text-gray-300 mb-4">
                <strong>Need help getting started?</strong> Check out our FAQ or contact support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/faq">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    View FAQ
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default PaymentSuccess;
