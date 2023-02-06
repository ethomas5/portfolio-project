export interface ApplicationFormat {
	image: string
	text: string
	content?: string
	regularApp: boolean
	isOpen: boolean
	professional?: ApplicationFormat
	personal?: ApplicationFormat
}

export const applicationList: ApplicationFormat[] = [
	{
		image: "about_me.png",
		text: "About Me",
		content: "Coming Soon",
		regularApp: true,
		isOpen: false,
	},
	{
		image: "projects_other.png",
		text: "Projects",
		content: "Work In Progress",
		regularApp: true,
		isOpen: false,

		professional: {
			image: "Placeholder.png",
			text: "Professional Projects",
			content: "Work In Progress",
			regularApp: false,
			isOpen: false,
		},

		personal: {
			image: "Placeholder.png",
			text: "Personal Projects",
			content: "Work In Progress",
			regularApp: false,
			isOpen: false,
		},
	},

	{
		image: "resume.png",
		text: "Resume",
		content: "Work In Progress",
		regularApp: true,
		isOpen: false,
	},

	{
		image: "other_experiences.png",
		text: "Experience",
		content: "Work In Progress",
		regularApp: true,
		isOpen: false,
	},

	{
		image: "contact.png",
		text: "Contact",
		content: "Work In Progress",
		regularApp: true,
		isOpen: false,
	},

	{
		image: "all_applications.png",
		text: "All Applications",
		regularApp: false,
		isOpen: false,
	},
];
