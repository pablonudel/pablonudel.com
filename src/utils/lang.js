export const userLang = (navigator.language || navigator.userLanguage).slice(
	0,
	2
)

const translations = {
	title: { es: "Desarrollador Web", fr: "Développeur Web" },
	hi: { es: "Hola! soy", fr: "Salut ! Je suis" },
	roles: {
		es: [
			"Desarrollador Web",
			"Ilustrador",
			"Diseñador Motion Graphics",
			"Diseñador Gráfico",
		],
		fr: ["Développeur Web", "Illustrateur", "Motion Designer", "Graphiste"],
	},
	comingSoon: {
		es: "Próximamente nuevo website!",
		fr: "Nouveau website à venir !",
	},
	download: { es: "Descarga mi CV", fr: "Téléchargez mon CV" },
}

export const cvLang = {
	en: {
		label: "en",
		file: "./cv/Pablo_Nudel-Web_Developer.pdf",
	},
	es: {
		label: "es",
		file: "./cv/Pablo_Nudel-Desarrollador_Web.pdf",
	},
	fr: {
		label: "fr",
		file: "./cv/Pablo_Nudel-Développeur_Web.pdf",
	},
}

export function translate(transObj, string) {
	if (translations[transObj][userLang]) return translations[transObj][userLang]
	return string
}
