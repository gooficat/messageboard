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

const followUser = async (followerId: number, followingId: number) => {
	await db`
    INSERT INTO follows (follower_id, following_id)
    VALUES (${followerId}, ${followingId})
  `;
};

const unfollowUser = async (followerId: number, followingId: number) => {
	await db`
    DELETE FROM follows
    WHERE follower_id = ${followerId} AND following_id = ${followingId}
  `;
};

const isFollowing = async (followerId: number, followingId: number) => {
	const result = await db`
    SELECT * FROM follows
    WHERE follower_id = ${followerId} AND following_id = ${followingId}
  `;
	return result.length > 0;
};

export {
	createUser,
	getUserByUsername,
	getUserByEmail,
	getUserById,
	followUser,
	unfollowUser,
	isFollowing,
};
