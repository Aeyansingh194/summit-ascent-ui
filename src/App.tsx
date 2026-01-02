import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Index from "./pages/Index";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Gear from "./pages/Gear";
import Collections from "./pages/Collections";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Men routes */}
            <Route path="/men" element={<Men />} />
            <Route path="/men/:subcategory" element={<CategoryPage category="men" />} />
            {/* Women routes */}
            <Route path="/women" element={<Women />} />
            <Route path="/women/:subcategory" element={<CategoryPage category="women" />} />
            {/* Gear routes */}
            <Route path="/gear" element={<Gear />} />
            <Route path="/gear/:subcategory" element={<CategoryPage category="gear" />} />
            {/* Collections routes */}
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:subcategory" element={<CategoryPage category="collections" />} />
            {/* Product detail */}
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Checkout */}
            <Route path="/checkout" element={<Checkout />} />
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
