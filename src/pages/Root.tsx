import { NavLink } from "react-router-dom";
import { router } from "../router";

export default function Root() {
    return <ul>
            {router.routes.map((route) => 
                <li key={route.id}>
                     <NavLink to={route.path || "/"}>
                        {route.path}
                     </NavLink>
                </li>
            )}
        </ul>
}
