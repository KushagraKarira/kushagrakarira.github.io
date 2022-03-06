module.exports = {
	globDirectory: 'kushagrakarira.github.io/',
	globPatterns: [
		'**/*.{html,ico,png,svg,sh,js,woff2,json,webmanifest,md,txt,xml,css}'
	],
	swDest: 'kushagrakarira.github.io/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/,
		/^none/
	]
};