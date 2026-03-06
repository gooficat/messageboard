type SessionType = {
	username: string;
	dateBegan: Date;
	lastPost: Date;
};

let sessions = new Map<string, SessionType>();

const startSession = async (username: string) => {
	const uuid = crypto.randomUUID();

	sessions.set(uuid, {
		username,
		dateBegan: new Date(),
		lastPost: new Date(),
	});

	return uuid;
};

const deleteSession = async (uuid: string) => {
	sessions.delete(uuid);
};

const getSession = async (uuid: string) => {
	console.log(`sessions: ${sessions.size}, ${sessions}`);
	return sessions.get(uuid);
};

setInterval(
	() => {
		sessions.forEach((session, uuid) => {
			if (
				new Date().getHours() - session.dateBegan.getHours() >
				24 * 30
			) {
				deleteSession(uuid);
			}
		});
	},
	1000 * 60 * 60 * 24,
);

export { startSession, deleteSession, getSession };
