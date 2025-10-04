import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AncientCivilizations from "./pages/AncientCivilizations";
import GreekPhilosophy from "./pages/GreekPhilosophy";
import Timeline from "./pages/Timeline";
import ExploreTimeline from "./pages/ExploreTimeline";
import HistoryAI from "./pages/HistoryAI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ancient" element={<AncientCivilizations />} />
          <Route path="/greek" element={<GreekPhilosophy />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/explore-timeline" element={<ExploreTimeline />} />
          <Route path="/history-ai" element={<HistoryAI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
