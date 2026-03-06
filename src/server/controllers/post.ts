import type { PostType } from "@/shared/post";
import db from "../db";

const createPost = async (content: string, userId: number) => {
	await db`
		INSERT INTO posts (content, user_id)
		VALUES (${content}, ${userId})
	`;
};

const getPostsByUserId = async (
	userId: number,
	start: number,
	count: number,
): Promise<PostType[]> => {
	const result = await db`
		SELECT * FROM posts
		WHERE user_id = ${userId}
		LIMIT ${count}
		OFFSET ${start}
	`;
	return result;
};

const getPostsByRecency = async (
	start: number,
	count: number,
): Promise<PostType[]> => {
	const result = await db`
		SELECT * FROM posts
		ORDER BY created_at DESC
		LIMIT ${count}
		OFFSET ${start}
	`;
	return result;
};

export { createPost, getPostsByUserId, getPostsByRecency };
