import { Suspense } from "react";
import NavBar from "./NavBar";
import Loading from "./Loading";
const Layout = ({children}) => {
    return (
        <>
        <Suspense fallback={<Loading/>}>

            <NavBar/>
            <div className=" w-screen h-fit">
                {children}
            </div>
        </Suspense>
        </>
    );
}

export default Layout;