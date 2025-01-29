import { useState } from 'react'
import { MailIcon, UserIcon, SendIcon } from 'lucide-react'
import { useToast } from '../../hooks/use-toast'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Button } from '../../components/ui/button'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData)
    
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
    })

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="w-full max-w-2xl mx-auto md:p-8">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/10">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-600">
          Get in Touch
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative group">
              <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="pl-10 bg-background/50 border border-gray-300 focus:border-primary transition-all duration-300 hover:border-muted"
              />
            </div>
            
            <div className="relative group">
              <MailIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="pl-10 bg-background/50 border border-gray-300 focus:border-primary transition-all duration-300 hover:border-muted"
              />
            </div>
          </div>

          <div className="relative group">
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="pl-10 bg-background/50 border border-gray-300 focus:border-primary transition-all duration-300 hover:border-muted"
            />
          </div>

          <div className="relative group">
            <Textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="pl-10 bg-background/50 border border-gray-300 focus:border-primary transition-all duration-300 hover:border-muted"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full group relative overflow-hidden bg-[#7ab80e] hover:bg-[#7ab80e]/90 text-white"
          >
            <span className="relative flex items-center justify-center gap-2">
              Send Message
              <SendIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </form>
      </div>
    </div>
  )
}