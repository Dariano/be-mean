var goal = {
	name: { type: },
	description: { type: },
	date_begin: { type: Date},
	date_dream: { type: Date},
	date_end: { type: Date},
	realocate: { type: },
	expired: { type: },
	historic: historic,
	tags:[tag],
	activities: [activity]
};

var tag = {
	name: { type: String},
};

var activity = {
	name: { type: },
	description: { type: },
	date_begin: { type: Date},
	date_dream: { type: Date},
	date_end: { type: Date},
	realocate: { type: },
	expired: { type: },
	tags: [ tag],
	comment: {
		text: { type: String },
		date_comment: { type: Date},
		members: []
	},
	historic: {
		date_realocate: { type: Date },
		files: [file]
	},
	members: [user]
};

var historic = {
	date_realocate: { type: Date}
};

var file = {
	path: { type: String },
	weight: { type: },
	name: { type: String },
};


var user = {
	nome: { type: },
	bio: { type: },
	date_register: { type: },
	avatar_path: { type: },
	auth,
	settins_system,
};

var auth = {
	usermane: { type: },
	email: { type: },
	password: { type: },
	last_access: { type: },
	online: { type: },
	disabled: { type: },
	has_token: { type: }
};

var settins_system = {
	background_path: { type: }
}

var log_system = {
	date_log: { type: },
	date_msg: { type: },
}