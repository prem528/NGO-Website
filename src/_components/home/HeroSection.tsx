import { Button } from "../../components/ui/button";
export default function HeroSection() {
  return (
    <div className="relative py-8 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://firebasestorage.googleapis.com/v0/b/ngo-project-883c0.firebasestorage.app/o/ngo-site-data%2Fbackground.mp4?alt=media&token=50c9ae38-e37b-4f17-ba5d-9df9aff92f3d"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="container relative mx-auto flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl text-white text-center  pb-32">
          <h2 className="mb-4 text-3xl font-light">Conversation Means</h2>
          <h1 className="mb-8 text-6xl font-bold leading-tight">
            Make an impact & give back to {" "} 
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-green-600 ml-1">
            NATURE
          </span>
          </h1>
          
          <Button size="lg" className="bg-[#7ab80e] hover:bg-[#7ab80e]/90">
            DONATE NOW
          </Button>
        </div>
      </div>
    </div>
  );
}

