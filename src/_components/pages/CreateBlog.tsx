import type React from "react"
import { useState, type ChangeEvent, type FormEvent } from "react"
import axios from "axios"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { PenLine, Image, Hash, BookOpen, Send } from "lucide-react"
import BlogNavigation from "./BlogNavigation"

const InputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="relative bg-white rounded-xl shadow-sm border border-gray-200 hover:border-indigo-500 transition-all duration-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20">
    {children}
  </div>
)

const CreateBlog: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    image: "",
    excerpt: "",
    content: "",
    user: "6794b24b70f40adc01b35b2f", // Permanent user ID
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const response = await axios.post("https://ngo-website11.onrender.com/api/v1/blog/create-blog", formData)

      if (response.data?.success) {
        toast.success("Blog created successfully!")
        setFormData({
          title: "",
          slug: "",
          category: "",
          image: "",
          excerpt: "",
          content: "",
          user: "6794b24b70f40adc01b35b2f", // Keep the user ID when resetting form
        })
      } else {
        toast.error("Failed to create blog. Please try again.")
      }
    } catch (error) {
      console.error("Error creating blog:", error)
      toast.error("An error occurred while creating the blog.")
    }
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 via-white to-green-300/30">
      <BlogNavigation />
      <ToastContainer />
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-300">
          <div className="px-6 py-8 sm:p-10">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">Create Your Blog</h2>
            <p className="text-center text-gray-600 mb-8">Share your thoughts with the world</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 ml-1">
                    Title
                  </label>
                  <InputWrapper>
                    <div className="flex items-center px-4 py-3">
                      <PenLine className="h-5 w-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter blog title"
                        className="block w-full border-0 bg-transparent focus:outline-none focus:ring-0 text-base resize-none"
                      />
                    </div>
                  </InputWrapper>
                </div>

                <div className="space-y-2">
                  <label htmlFor="slug" className="block text-sm font-medium text-gray-700 ml-1">
                    Topic
                  </label>
                  <InputWrapper>
                    <div className="flex items-center px-4 py-3">
                      <Hash className="h-5 w-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        id="slug"
                        name="slug"
                        value={formData.slug}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter topic"
                        className="block w-full border-0 bg-transparent focus:outline-none focus:ring-0 text-base resize-none"
                      />
                    </div>
                  </InputWrapper>
                </div>

                <div className="space-y-2">
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 ml-1">
                    Category
                  </label>
                  <InputWrapper>
                    <div className="flex items-center px-4 py-3">
                      <BookOpen className="h-5 w-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter category"
                        className="block w-full border-0 bg-transparent focus:outline-none focus:ring-0 text-base resize-none"
                      />
                    </div>
                  </InputWrapper>
                </div>

                <div className="space-y-2">
                  <label htmlFor="image" className="block text-sm font-medium text-gray-700 ml-1">
                    Image URL
                  </label>
                  <InputWrapper>
                    <div className="flex items-center px-4 py-3">
                      <Image className="h-5 w-5 text-gray-400 mr-2" />
                      <input
                        type="url"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter image URL"
                        className="block w-full border-0 bg-transparent focus:outline-none focus:ring-0 text-base resize-none"
                      />
                    </div>
                  </InputWrapper>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 ml-1">
                  Excerpt
                </label>
                <InputWrapper>
                  <div className="px-4 py-3">
                    <textarea
                      id="excerpt"
                      name="excerpt"
                      value={formData.excerpt}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      placeholder="Write a brief excerpt..."
                      className="block w-full border-0 bg-transparent focus:outline-none focus:ring-0 text-base resize-none"
                    />
                  </div>
                </InputWrapper>
              </div>

              <div className="space-y-2">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 ml-1">
                  Content
                </label>
                <InputWrapper>
                  <div className="px-4 py-3">
                    <textarea
                      id="content"
                      name="content"
                      value={formData.content}
                      onChange={handleInputChange}
                      required
                      rows={8}
                      placeholder="Write your blog content..."
                      className="block w-full border-0 bg-transparent focus:outline-none focus:ring-0 text-base resize-none"
                    />
                  </div>
                </InputWrapper>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 border border-transparent rounded-xl text-base font-medium text-white bg-[#7ab80e] hover:bg-[#7ab80e]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <Send className="h-5 w-5" />
                  Publish Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateBlog

