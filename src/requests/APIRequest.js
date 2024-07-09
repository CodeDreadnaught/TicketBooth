const apiUrl = "https://ticketdorm-server.onrender.com/ticketdorm";

const createAccount = async userInfo => {
    const response = await fetch(`${apiUrl}/bolacash/auth/register/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
        }),
        data = await response.json();

         return data;
};
const signIn = async userInfo => {
    const response = await fetch(`${apiUrl}/bolacash/auth/login/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfo)
        }),
        data = await response.json();

         return data;
};

const fetchAllEvents = async () => {
    const response = await fetch(`${apiUrl}/event/all`),
        data = await response.json();

         return data;
};

export { createAccount, signIn, fetchAllEvents };