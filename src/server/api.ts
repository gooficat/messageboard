import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
	res.send("Hello from the API!");
});

export default router;
