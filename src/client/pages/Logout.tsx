import { Navigate } from "react-router-dom";


function Logout() {
    cookieStore.get("sessionId").then((cookie) => {
        fetch("/api/logout", {
            method: "POST",
            body: JSON.stringify({
                sessionId: cookie
            })
        })
        cookieStore.delete("sessionId").then(() => {
            window.location.href = "/login";
        });
    })
    return <></>
}

export default Logout;