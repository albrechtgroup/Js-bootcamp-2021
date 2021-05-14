alert('Password Validator');
/// Writea isValidPassword function
/// It accepts 2 arguements: password and username
/// Password must:
///     -be at least 8 characters
///     -cannot contain spaces
///     -cannot contain the username
/// If all the requirements are met, return true.
/// Otherwise: false

function isValidPassword(password, username) {
	if (password.length < 8) {
		return false;
	}
	if (password.indexOf(' ') !== -1) {
		return false;
	}
	if (password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}

//////////////////// 0r...

function isValidPassword(password, username) {
	if (password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1) {
		return false;
	}
	return true;
}

//////////////////// 0r...

function isValidPassword(password, username) {
	const tooShort = password.length < 8;
	const hasSpace = password.indexOf(' ') !== -1;
	const tooSimilar = password.indexOf(username) !== -1;
	if (tooShort || hasSpace || tooSimilar) return false;
	return true;
}
