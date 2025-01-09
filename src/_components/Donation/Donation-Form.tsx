 
import { useState } from 'react'
 
import { CreditCard, DollarSign } from 'lucide-react'
import { useToast } from '../../hooks/use-toast'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import { Label } from '../../components/ui/label'
 

const donationAmounts = [25, 50, 100, 250, 500]

export function DonationForm() {
  const [amount, setAmount] = useState<number | string>(50)
  const [paymentMethod, setPaymentMethod] = useState<'credit-card' | 'paypal'>('credit-card')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically process the payment
    console.log('Processing donation:', { amount, paymentMethod, name, email })
    
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Thank you for your donation!",
      description: `We've received your $${amount} donation. Your support means the world to us.`,
    })

    // Reset form
    setAmount(50)
    setPaymentMethod('credit-card')
    setName('')
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Donation Amount</h2>
        <div className="grid grid-cols-3 gap-4">
          {donationAmounts.map((amt) => (
            <Button
              key={amt}
              type="button"
              variant={amount === amt ? "default" : "outline"}
              className={`${amount === amt ? 'bg-[#7ab80e] hover:bg-[#7ab80e]/90' : 'border-[#7ab80e] text-[#7ab80e] hover:bg-[#7ab80e] hover:text-white'}`}
              onClick={() => setAmount(amt)}
            >
              ${amt}
            </Button>
          ))}
          <div className="col-span-3">
            <label htmlFor="custom-amount">Custom Amount</label>
            <div className="relative mt-1">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="number"
                id="custom-amount"
                placeholder="Enter custom amount"
                value={typeof amount === 'string' ? amount : ''}
                onChange={(e) => setAmount(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Method</h2>
        <RadioGroup defaultValue="credit-card" onValueChange={(value: 'credit-card' | 'paypal') => setPaymentMethod(value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="credit-card" id="credit-card" />
            <Label htmlFor="credit-card">Credit Card</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paypal" id="paypal" />
            <label htmlFor="paypal">PayPal</label>
          </div>
        </RadioGroup>
      </div>

      {paymentMethod === 'credit-card' && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="card-number">Card Number</Label>
            <div className="relative mt-1">
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input type="text" id="card-number" placeholder="1234 5678 9012 3456" className="pl-10" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry-date">Expiry Date</Label>
              <Input type="text" id="expiry-date" placeholder="MM/YY" />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input type="text" id="cvv" placeholder="123" />
            </div>
          </div>
        </div>
      )}

      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full bg-[#7ab80e] hover:bg-[#7ab80e]/90">
        Donate Now
      </Button>
    </form>
  )
}

