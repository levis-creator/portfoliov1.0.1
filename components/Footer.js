import { AiOutlineCopyrightCircle } from "react-icons/ai";


export default () => {
    let year = new Date().getFullYear()
    return (
        <footer className="flex flex-col bg-gray-600 w-screen items-center sm:flex-row sm:justify-between px-3">
            <div className="flex items-center gap-2">
                <AiOutlineCopyrightCircle/>
                all copyright reserves {year}
            </div>
            <div>
                Created by Levis Nyingi
            </div>
        </footer>
    );
}