import type React from "react"
import { PlusCircle, Grid } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Link } from "react-router-dom"
 
const BlogNavigation: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-8">
      <Button asChild className="w-full sm:w-auto bg-white border border-gray-400 text-[#7ab80e] boarder hover:bg-[#7ab80e] hover:text-white">
        <Link to="/all-blogs">
          <Grid className="w-4 h-4 mr-2" />
          All Blogs
        </Link>
      </Button>
      <Button asChild className="w-full sm:w-auto bg-white border border-gray-400 text-[#7ab80e] boarder hover:bg-[#7ab80e] hover:text-white">
        <Link to="/create-blog">
          <PlusCircle className="w-4 h-4 mr-2" />
          Create Blog
        </Link>
      </Button>
 
    </div>
  )
}

export default BlogNavigation

