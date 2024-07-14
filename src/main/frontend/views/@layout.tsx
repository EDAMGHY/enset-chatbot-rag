import {NavLink, Outlet} from "react-router-dom";

export default function Layout() {
    return <div className="p-m">
        <nav className="d-flex gap-m flex-wrap">
            <NavLink className="btn btn-outline-primary" to="/">Home</NavLink>
            <NavLink className="btn btn-outline-primary" to="/chat">Chat</NavLink>
        </nav>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
}