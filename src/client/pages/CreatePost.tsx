import { useState } from "react";
import { Form, FormSubmit } from "../components/Forms";

function CreatePost() {
	const [error, setError] = useState("");

	cookieStore.get("sessionId").then((sessionId) => {
		if (!sessionId) {
			window.location.href = "/login";
		}
	});

	function Submit(event: React.SubmitEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		const content = formData.get("content") as string;
		cookieStore.get("sessionId").then((sessionId) => {
			if (!sessionId) {
				window.location.href = "/login";
				return;
			}
			fetch("/api/post", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					sessionId: sessionId?.value,
					content,
				}),
			}).then((res) => {
				res.json().then((data) => {
					if (data.invalidSession) {
						// console.log(document.cookie);
						window.location.href = "/login";
						return;
					}
					if (data.success) {
						window.location.href = "/";
					} else {
						setError(data.message);
						// console.error(`msg: ${data.message}`);
					}
				});
			});
		});
	}

	return (
		<div className="p-4 flex flex-col gap-4 h-screen items-center justify-center">
			<Form onSubmit={Submit}>
				{error && <p className="text-red-500">{error}</p>}
				<textarea
					name="content"
					className="pal-bg-grey w-sm h-40 p-2 resize-none rounded-md"
					maxLength={200}
					placeholder="Enter post content..."
					required
				/>
				<FormSubmit text="Submit" />
			</Form>
		</div>
	);
}

export default CreatePost;
