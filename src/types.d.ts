enum Status {
	Updating = 'Updating',
	Developing = 'Developing',
	Archived = 'Archived',
	Planning = 'Planning',
	Idle = 'Idle',
}

interface Project {
	name: string,
	description: string,
	url: string,
	status: Status,
	websites: Record<string, string>,
	tools: Record<string, string>,
}
