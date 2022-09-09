// define service
class AlertService {
	private readonly msg_error_1 = 'Error!';
	private readonly msg_error_2 = 'An unknown problem has occurred! Please try again later.';

	private prompt = async (line_1: string, line_2: string) =>
		Promise.resolve(alert([line_1, line_2].join('\n')));

	promptError = async (message?: string) =>
		this.prompt(this.msg_error_1, message || this.msg_error_2);
}

// export service
export default new AlertService();
