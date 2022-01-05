export const sendMailMessage = (message: string) => {
	window.open("mailto:alex.adaumi@gmail.com?subject=Contact&body=" + message);
};
