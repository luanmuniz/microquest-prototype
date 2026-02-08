import CreateForm from "@/components/CreateForm";
import Quest from "@/components/Quest";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 w-full">
      <div className="space-y-8 text-left flex flex-col md:flex-row md:items-center md:justify-between w-full max-w-4xl">
        <div className="text-left mb-0">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to MicroQuest</h1>
          <p className="text-sm text-muted-foreground">
            Your personal quest manager for daily adventures and challenges.
          </p>
        </div>
        <div className="space-y-4 text-right">
          <CreateForm />
        </div>
      </div>
      <div className="w-full max-w-4xl">
        <Quest title="Defeat the Dragon" description="Slay the dragon terrorizing the village." isToday={true} />
        <Quest title="Gather Herbs" description="Collect 10 healing herbs from the forest." isToday={false} />
        <Quest title="Rescue the Princess" description="Save the princess from the evil warlock's tower." isToday={false} />
      </div>
    </div>
  )
}