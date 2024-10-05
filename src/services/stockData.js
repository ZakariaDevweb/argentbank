const stockData = {
    clearData() {
        localStorage.clear();
    },
    setAuthentication(email, firstName, lastName, nickName, token) {
        const userData = {
            isAuthenticated: true,
            email,
            firstName,
            lastName,
            nickName,
            token
        };

        const serializedUserData = JSON.stringify(userData);
        localStorage.setItem('userData', serializedUserData);
    },
    getAuthentication() {
        const serializedUserData = localStorage.getItem('userData');
        if (serializedUserData) {
            const userData = JSON.parse(serializedUserData);
            return userData;
        }
        return {
            isAuthenticated: false,
            email: null,
            firstName: null,
            lastName: null,
            nickName: null,
            token: null
        };
    }
};


export default stockData;