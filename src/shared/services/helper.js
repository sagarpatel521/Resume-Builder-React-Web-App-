/**
 * function to check if user is logged in or not
 */
const checkLogin = () => {
	if (localStorage.authData) {
		return true;
	} else {
		return false;
	}
};

/**
 * function to set user authentication data
 */
const setAuthData = (data) => {
	localStorage.setItem('authData', JSON.stringify(data));
};

/**
 * function to get user authentication data
 */
const getAuthData = () => {
	const data = localStorage.authData;
	if (data) {
		return JSON.parse(data);
	} else {
		return;
	}
};

/**
 * function to remove user authentication data
 */
const removeAuthData = () => {
	localStorage.removeItem('authData');
};

const authService = {
	checkLogin: checkLogin,
	setAuthData: setAuthData,
	getAuthData: getAuthData,
	removeAuthData: removeAuthData
};

export default authService;
