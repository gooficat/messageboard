import db from "../db";

const createUser = async (
	username: string,
	email: string,
	password: string,
) => {
	await db`
    INSERT INTO users (username, email, password)
    VALUES (${username}, ${email}, ${password})
  `;
};

const getUserByUsername = async (username: string) => {
	const result = await db`
    SELECT * FROM users
    WHERE username = ${username}
  `;
	return result[0];
};

const getUserByEmail = async (email: string) => {
	const result = await db`
    SELECT * FROM users
    WHERE email = ${email}
  `;
	return result[0];
};

const getUserById = async (id: number) => {
	const result = await db`
    SELECT * FROM users
    WHERE id = ${id}
  `;
	return result[0];
};

export { createUser, getUserByUsername, getUserByEmail, getUserById };
