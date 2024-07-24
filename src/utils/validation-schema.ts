export const isEmailValid = {
	required: {
		value: true,
		message: `This field is required`
	},
	pattern: {
		value: /(\w\.?)+@[\w.-]+\.\w{2,4}/,
		message: `Please enter valid email`
	}
}

export const isPasswordValid = {
	required: {
		value: true,
		message: `This field is required`
	}
}

