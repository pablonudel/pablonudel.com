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
		file: "./cv/Pablo_Nudel-Fullstack_Developer.pdf",
	},
	es: {
		label: "es",
		file: "./cv/Pablo_Nudel-Desarrollador_Fullstack.pdf",
	},
	fr: {
		label: "fr",
		file: "./cv/Pablo_Nudel-Développeur_Fullstack.pdf",
	},
}

export function translate(transObj, string) {
	if (translations[transObj][userLang]) return translations[transObj][userLang]
	return string
}
