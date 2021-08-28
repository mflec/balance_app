const Logout = () => {
    localStorage.removeItem("token");
    return window.location.href = "/";
}

export default Logout;