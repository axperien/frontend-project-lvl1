install: install-deps

start: 
		npx node bin/brain-games.js

publish: 
		npm publish --dry-run

lint:
		npx eslint .