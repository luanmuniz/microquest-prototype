import Home from "@/components/pages/Home";
import Today from "@/components/pages/Today";
import History from "./components/pages/History";
import Header from "@/components/Header";

export function App() {
    const searchParams = new URLSearchParams(window.location.search);
    const page = searchParams.get("page");

    return (
        <div className="min-h-screen bg-background text-foreground">
            <Header />
            <main className="container mx-auto p-4 pt-0">
                <div className="mx-auto flex flex-col items-center gap-2 px-6 py-8 text-center pt-0">
                    {(!page || page === "home") && <Home />}
                    {page === "today" && <Today />}
                    {page === "history" && <History />}

                    {page && !["home", "today", "history", "create-new-quest"].includes(page) && (
                        <div className="text-red-500">Page not found</div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;