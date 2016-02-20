var project = {
	name: 'PROJETO DA AGENDA',
	description: 'Projeto responsavel por fazer o agendamento.',
	date_begin: Date.now(),
	date_dream: Date.now(),
	date_end:  Date.now(),
	visible: true,
	realocate: true,
	expired: false,
	visualizable_mod: false,
	goal: [{
		name: 'Cria agendamento',
		description: 'Cria agendamento usando uma agenda legal',
		date_begin: Date.now(),
		date_dream:  Date.now(),
		date_end:  Date.now(),
		realocate: true,
		expired: false,
		historic: [{
			date_realocate:  Date.now()
		}],
		tags:[{
			name: 'agenda'
		},{
			name: 'agendamento'
		}],
		activities: [{
			name: { type: String },
			description: { type: String },
			date_begin: { type: Date},
			date_dream: { type: Date},
			date_end: { type: Date},
			realocate: { type: Boolean },
			expired: { type: Boolean},
			tags: [{
				name: { type: String},
			}],
			comment: {
				text: { type: String },
				date_comment: { type: Date},
				members: [user]
			},
			historics: [{
				date_realocate: { type: Date },
				files: [{
					path: { type: String },
					weight: { type: },
					name: { type: String },
				}]
			}],
			members: [user]
		}]
	}],
	tags: [{
		name: { type: String},
	}],
	members: [user]

};

var user2 = {
	nome: 'Matheus Leonardo Kevin Rocha',
	bio: '',
	date_register: Date.now(),
	avatar_path: '/avatars/user2.jpg',
	auth: {
		usermane: 'matheus',
		email: 'matheus.leonardo.rocha@aerobravo.com.br',
		password: 'UIt6JeWniE',
		last_access: Date.now(),
		online: true,
		disabled: false,
		has_token: false
	},
	settins_system: {
		background_path: 'caminho/background'
	}
};

var user3 = {
	nome: 'Carlos Eduardo Filipe Gomes',
	bio: '',
	date_register: Date.now(),
	avatar_path: '/avatars/user2.jpg',
	auth: {
		usermane: 'cegomes',
		email: 'cegomes@dglnet.com.br',
		password: 'UqygbEMGLA',
		last_access: Date.now(),
		online: true,
		disabled: false,
		has_token: false
	},
	settins_system: {
		background_path: 'caminho/background'
	}
};

db.users.save(user3)


var user4 = {
	nome: 'Davi Marcos Vinicius Carvalho',
	bio: '',
	date_register: Date.now(),
	avatar_path: '/avatars/user2.jpg',
	auth: {
		usermane: 'davi_marcos',
		email: 'davi_marcos@softcia.com.br',
		password: 'xidFF302HD',
		last_access: Date.now(),
		online: true,
		disabled: false,
		has_token: false
	},
	settins_system: {
		background_path: 'caminho/background'
	}
};

db.users.save(user4)

var user5 = {
	nome: 'Hugo Joaquim Dias',
	bio: '',
	date_register: Date.now(),
	avatar_path: '/avatars/user2.jpg',
	auth: {
		usermane: 'hugo_j_dias',
		email: 'hugo_j_dias@hotmail.co.uk',
		password: 'xidFF302HD',
		last_access: Date.now(),
		online: true,
		disabled: false,
		has_token: false
	},
	settins_system: {
		background_path: 'caminho/background'
	}
};

db.users.save(user5)

var user6 = {
	nome: 'Eduardo Julio Diogo Araújo',
	bio: '',
	date_register: Date.now(),
	avatar_path: '/avatars/user2.jpg',
	auth: {
		usermane: 'eduardo_j_araujo',
		email: 'eduardo_j_araujo@scalioni.com.br',
		password: 'EI4jcbwlCr',
		last_access: Date.now(),
		online: true,
		disabled: false,
		has_token: false
	},
	settins_system: {
		background_path: 'caminho/background'
	}
};

db.users.save(user6)

var user7 = {
	nome: 'Pedro Bryan Joaquim Lima',
	bio: '',
	date_register: Date.now(),
	avatar_path: '/avatars/user2.jpg',
	auth: {
		usermane: 'pedro.bryan',
		email: 'pedro.bryan.lima@itatiaia.net',
		password: 'J1lzZi5gCB',
		last_access: Date.now(),
		online: true,
		disabled: false,
		has_token: false
	},
	settins_system: {
		background_path: 'caminho/background'
	}
};

db.users.save(user7)

var user8 = {
	nome: 'Pedro Miguel Otávio Dias',
	bio: '',
	date_register: Date.now(),
	avatar_path: '/avatars/user2.jpg',
	auth: {
		usermane: 'pedro_miguel',
		email: 'pedro_miguel@tonyveiculos.com.br',
		password: 'AckpWiDZWc',
		last_access: Date.now(),
		online: true,
		disabled: false,
		has_token: false
	},
	settins_system: {
		background_path: 'caminho/background'
	}
};

db.users.save(user8)

var user9 = {
	nome: 'Rodrigo Rafael da Silva',
	bio: '',
	date_register: Date.now(),
	avatar_path: '/avatars/user2.jpg',
	auth: {
		usermane: 'rrsilva',
		email: 'rrsilva@queirozgalvao.com',
		password: 'WS9mxx31AF',
		last_access: Date.now(),
		online: true,
		disabled: false,
		has_token: false
	},
	settins_system: {
		background_path: 'caminho/background'
	}
};

db.users.save(user9)

var user10 = {
	nome: 'Guilherme Kaique Otávio Cavalcanti',
	bio: '',
	date_register: Date.now(),
	avatar_path: '/avatars/user2.jpg',
	auth: {
		usermane: 'guilherme_kaique',
		email: 'guilherme_kaique@tigra.com.br',
		password: 'cInsh79iU5',
		last_access: Date.now(),
		online: true,
		disabled: false,
		has_token: false
	},
	settins_system: {
		background_path: 'caminho/background'
	}
};

db.users.save(user10)