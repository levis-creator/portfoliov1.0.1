import NavBar from "./NavBar";
const Layout = ({children}) => {
    return (
        <>
            <NavBar/>
            <div className=" w-screen h-fit">
                {children}
            </div>
        </>
    );
}

export default Layout;