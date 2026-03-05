export default {
	"/api": {
		GET: () => {
			return new Response(
				JSON.stringify({ success: true, message: "Hello, API!" }),
			);
		},
	},
};
