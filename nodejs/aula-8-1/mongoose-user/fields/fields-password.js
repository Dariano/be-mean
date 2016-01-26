const _get = (valor) => valor.toUpperCase();
const _set = (valor) => valor.toLowerCase();
const _validate = (valor) => valor.length >= 6 && valor.length <= 10;

const Field = {
	type: String,
	// get: _get,
	// set: _set,
	validate: [_validate, 'O password tem que ser maior igual a 6 e menor que 10'],
	required: true,
};

module.exports = Field;