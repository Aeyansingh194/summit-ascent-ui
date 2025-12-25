import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2, CreditCard, Truck, Shield } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/hooks/use-toast';

const Checkout = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const shippingCost = totalPrice > 150 ? 0 : 12.99;
  const tax = totalPrice * 0.08;
  const grandTotal = totalPrice + shippingCost + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checkout.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsProcessing(false);
    clearCart();
    
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase. You will receive a confirmation email shortly.",
    });
    
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-32 pb-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Your Cart is Empty
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link to="/">
                <Button variant="default" size="lg" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Continue Shopping
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Continue Shopping
            </Link>

            <h1 className="font-display text-4xl md:text-5xl text-foreground mb-12">
              Checkout
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="space-y-4">
                  <h2 className="font-display text-2xl text-foreground">Contact Information</h2>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <Separator />

                {/* Shipping Address */}
                <div className="space-y-4">
                  <h2 className="font-display text-2xl text-foreground">Shipping Address</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="address">Address</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="123 Main Street"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        name="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="postalCode">Postal Code</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        placeholder="12345"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        name="country"
                        placeholder="Country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Payment Information */}
                <div className="space-y-4">
                  <h2 className="font-display text-2xl text-foreground">Payment</h2>
                  <div>
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date</Label>
                      <Input
                        id="expiryDate"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV</Label>
                      <Input
                        id="cvv"
                        name="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-background border-t-transparent rounded-full"
                      />
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      Place Order • ${grandTotal.toFixed(2)}
                    </span>
                  )}
                </Button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-6 pt-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Shield className="w-4 h-4" />
                    Secure Checkout
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Truck className="w-4 h-4" />
                    Free Shipping Over $150
                  </div>
                </div>
              </form>
            </motion.div>

            {/* Right Column - Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-card rounded-2xl p-6 lg:p-8 sticky top-32">
                <h2 className="font-display text-2xl text-foreground mb-6">Order Summary</h2>
                
                {/* Cart Items */}
                <div className="space-y-4 max-h-[400px] overflow-y-auto">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.size}-${item.color}`} className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-foreground truncate">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.size && `Size: ${item.size}`}
                          {item.size && item.color && ' • '}
                          {item.color && `Color: ${item.color}`}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-6 h-6 rounded-full bg-muted flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Separator className="my-6" />

                {/* Totals */}
                <div className="space-y-3">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-display text-foreground">
                    <span>Total</span>
                    <span>${grandTotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
