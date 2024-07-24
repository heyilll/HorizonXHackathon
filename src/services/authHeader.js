const authHeader = () => {
    const user = JSON.parse(localStorage.getItem(`currentUser`)); 

    if (user && user.token) {
        return {
            "authentication": user.token
        }
    }
    else {
        return {};
    }
}

export default authHeader;