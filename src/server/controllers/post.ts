import db from "../db";

const createPost = async (title: string, content: string, userId: number) => {
	await db`
		INSERT INTO posts (title, content, user_id)
		VALUES (${title}, ${content}, ${userId})
	`;
};

const getPostsByUserId = async (userId: number) => {
	const result = await db`
		SELECT * FROM posts
		WHERE user_id = ${userId}
	`;
	return result;
};

const getPostsByRecency = async (start: number, count: number) => {
	const result = await db`
		SELECT * FROM posts
		ORDER BY created_at DESC
		LIMIT ${count}
		OFFSET ${start}
	`;
	return result;
};

export { createPost, getPostsByUserId, getPostsByRecency };
