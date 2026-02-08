import { Button } from "@/components/ui/button";

export default function Header() {
    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");
    const currentPage = page ? page : "home";

    const isButtonActive = (buttonPage: string) => {
        return currentPage === buttonPage ? "default" : "outline";
    }

    return (
        <header className="bg-background/50 backdrop-blur-sm border-b border-border p-4">
            <main className="flex items-center justify-between container mx-auto">
                <div>
                    <h1 className="text-2xl font-bold">MicroQuest</h1>
                </div>
                <nav className="flex space-x-4">
                    <Button variant={isButtonActive('home')} className={`px-3 py-2}`}><a href="?page=home">Home</a></Button>
                    <Button variant={isButtonActive('today')} className={`px-3 py-2`}><a href="?page=today">Today</a></Button>
                    <Button variant={isButtonActive('history')} className={`px-3 py-2`}><a href="?page=history">History</a></Button>
                </nav>
            </main>
        </header>
    );
}