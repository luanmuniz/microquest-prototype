import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Today() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 w-full">
      <div className="space-y-8 text-left flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-4xl">
        <div className="text-left mb-0">
          <h1 className="text-4xl font-bold tracking-tight">Today's Quest</h1>
          <p className="text-sm text-muted-foreground">
            View your quests for today and plan your adventures. Stay focused and achieve your goals!
          </p>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <div className="p-4 border rounded-md">
          <h2 className="text-2xl font-semibold mb-2 text-left">Defeat the Dragon</h2>
          <p className="text-muted-foreground mb-4 text-left">Slay the dragon terrorizing the village.</p>

          <h3 className="text-lg font-semibold mb-2 text-left">Reflection</h3>
          <Textarea placeholder="Write your reflection here..." className="w-full" />
          <Button variant="default" className="w-full mt-4 cursor-pointer">Save Reflection</Button>
        </div>
        <p className="text-sm text-muted-foreground text-center mt-4">
          <a href="?page=home" className="text-center text-sm text-muted-foreground cursor-pointer">Want to change today's quest?</a>
        </p>
      </div>
    </div>
  )
}