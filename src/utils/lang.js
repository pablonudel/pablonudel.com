export const userLang = (navigator.language || navigator.userLanguage).slice(
	0,
	2
)

const translations = {
	hi: { es: "Hola! soy", fr: "Salut ! Je suis" },
	roles: {
		es: [
			"Desarrollador Front-End",
			"Ilustrador",
			"Diseñador Motion Graphics",
			"Diseñador Gráfico",
		],
		fr: [
			"Développeur Front-End",
			"Illustrateur",
			"Motion Designer",
			"Designer Graphiste",
		],
	},
	comingSoon: {
		es: "Próximamente nuevo website!",
		fr: "Nouveau website à venir !",
	},
	download: { es: "Descarga mi CV", fr: "Téléchargez mon CV" },
}

export function translate(transObj, string) {
	if (translations[transObj][userLang]) return translations[transObj][userLang]
	return string
}
