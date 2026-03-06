

type SessionType = {
    username: string,
    dateBegan: Date,
}

let sessions = new Map<string, SessionType>();


const startSession = async (req: SessionType) => {
    const uuid = crypto.randomUUID();

    sessions.set(uuid, req);

    return uuid;
}

const deleteSession = async (uuid: string) => {
    sessions.delete(uuid);
}

setInterval(() => {
    sessions.forEach((session, uuid) => {
        if (new Date().getHours() - session.dateBegan.getHours() > 24 * 30) {
            deleteSession(uuid);
        }
    })
}, 1000 * 60 * 60 * 24);

export { startSession, deleteSession };