import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "./components/index.js";

function App() {
    const location = useLocation();


    const isDashboard = location.pathname.startsWith("/dashBoard");

    return (
        <div className="flex flex-col min-h-screen w-full bg-[#fafcfc]">
            {!isDashboard && <Header />}

            <main className="flex-1 w-full">
                <Outlet />
            </main>

            {!isDashboard && <Footer />}
        </div>
    );
}

export default App;
