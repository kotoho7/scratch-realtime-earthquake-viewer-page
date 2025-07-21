document.addEventListener("keydown", async (event) => {
	const { getCurrentWindow } = window.__TAURI__.window;
	if (event.key === "F11") {
		await getCurrentWindow().setFullscreen(
			!await getCurrentWindow().isFullscreen(),
		);
	}
});
