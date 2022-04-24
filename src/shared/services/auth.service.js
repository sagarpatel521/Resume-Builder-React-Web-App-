export const checkLogin = () => {
	if (localStorage.getItem('login-email')) {
		return true;
	} else {
		return false;
	}
};

export const setAuthData = (data) => {
    localStorage.setItem('login-email', data);
};

export const getAuthData = () => {
    const data = localStorage.getItem('login-email');
    return data || '';
};