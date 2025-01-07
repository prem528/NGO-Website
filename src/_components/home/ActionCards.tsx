import { Button } from "../../components/ui/button"

 
const cards = [
  {
    title: "DONATE US",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    action: "View all causes"
  },
  {
    title: "VOLUNTEER",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    action: "Join US"
  },
  {
    title: "GET INVOLVED",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    action: "Latest Events"
  },
  {
    title: "ONLINE HELP",
    description: "+012 345 6789",
    action: "Latest Events",
    isContact: true
  }
]

export function ActionCards() {
  return (
    <div className="relative container mx-auto px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 -mt-20 px-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-[#7ab80e] p-6 text-white text-center rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-xl font-bold mb-4">{card.title}</h3>
            {card.isContact ? (
              <div className="text-3xl font-bold mb-6">{card.description}</div>
            ) : (
              <p className="mb-6 text-white/90">{card.description}</p>
            )}
            <Button
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-[#7ab80e]"
            >
              {card.action}
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

