function createRandomProfileImage(userIdentifier) {
	const sanitizedIdentifier = userIdentifier.replace(/[^a-zA-Z0-9]/g, '');

	// DiceBear 9.x styles you want to support (replace or add as needed)
	const selectedStyle = 'pixel-art';

	// Select a random style from the list
	// const selectedStyle = availableStyles[Math.floor(Math.random() * availableStyles.length)];

	// Return the URL using DiceBear's new API format
	return `${process.env.DEFAULT_AVATAR}${selectedStyle}/svg?seed=${encodeURIComponent(sanitizedIdentifier)}`;
}

export { createRandomProfileImage };
