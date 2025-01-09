'use client'

import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { useToast } from '../../hooks/use-toast'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'

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
    <form onSubmit={handleSubmit} className="space-y-6 px-10">
      <div>
        <label htmlFor="name" className="block text-md font-medium text-gray-700">Name</label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2 border-gray-300"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-md font-medium text-gray-700">Email</label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2 border-gray-300"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-md font-medium text-gray-700">Subject</label>
        <Input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="mt-2 border-gray-300"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-md font-medium text-gray-700">Message</label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-2 border-gray-300"
        />
      </div>
      <Button type="submit" className="w-full bg-[#7ab80e] hover:bg-[#7ab80e]/90">
        Send Message
      </Button>
    </form>
  )
}

