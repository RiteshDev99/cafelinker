
import {Outlet} from "react-router-dom";
import {Footer, Header} from "./components/index.js";

function App() {



    return(
        <div className='flex flex-col flex-wrap justify-between min-h-screen w-full items-center  bg-[#fafcfc] ' >
            <Header/>
            <min>
                <Outlet />
            </min>
            <Footer/>
        </div>
    )

}

export default App
