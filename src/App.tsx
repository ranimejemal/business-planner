
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import Index from "./pages/Index";
import Buy from "./pages/Buy";
import Features from "./pages/Features";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import PaymentSuccess from "./pages/PaymentSuccess";
import PlannerDashboard from "./pages/planner/Dashboard";
import PlannerDaily from "./pages/planner/Daily";
import PlannerWeekly from "./pages/planner/Weekly";
import PlannerGoals from "./pages/planner/Goals";
import StudyTracker from "./pages/planner/StudyTracker";
import Printables from "./pages/planner/Printables";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="min-h-screen flex flex-col w-full">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/features" element={<Features />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/planner/dashboard" element={<PlannerDashboard />} />
                <Route path="/planner/daily" element={<PlannerDaily />} />
                <Route path="/planner/weekly" element={<PlannerWeekly />} />
                <Route path="/planner/goals" element={<PlannerGoals />} />
                <Route path="/planner/study-tracker" element={<StudyTracker />} />
                <Route path="/planner/printables" element={<Printables />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
