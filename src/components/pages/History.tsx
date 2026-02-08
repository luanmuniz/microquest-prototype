
import Quest from "@/components/Quest";

export default function History() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 w-full">
      <div className="space-y-8 text-left flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-4xl">
        <div className="text-left mb-0">
          <h1 className="text-4xl font-bold tracking-tight">History</h1>
          <p className="text-sm text-muted-foreground">
            View your past quests and accomplishments. Reflect on your journey and celebrate your victories!
          </p>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <Quest title="Defeat the Dragon" description="Slay the dragon terrorizing the village." hideActions={true} reflection="I felt brave and accomplished after defeating the dragon." />
        <Quest title="Gather Herbs" description="Collect 10 healing herbs from the forest." hideActions={true} />
        <Quest title="Rescue the Princess" description="Save the princess from the evil warlock's tower." hideActions={true} reflection="Rescuing the princess was a challenging but rewarding experience." />
      </div>
    </div>
  )
}