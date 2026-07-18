import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Presell from "./pages/Presell";
import Quiz from "./pages/Quiz";
import IdPlayer from "./pages/IdPlayer";
import Recharge from "./pages/Recharge";
import Quiz2 from "./pages/Quiz2";
import IdPlayer2 from "./pages/IdPlayer2";
import Recharge2 from "./pages/Recharge2";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/presell" replace />} />
          <Route path="/presell" element={<Presell />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/id-player" element={<IdPlayer />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/quiz2" element={<Quiz2 />} />
          <Route path="/id-player2" element={<IdPlayer2 />} />
          <Route path="/recharge2" element={<Recharge2 />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
