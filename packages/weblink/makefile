.PHONY: build clean test publish

default: clean build

clean:
	rm -rf dist

build:
	npx rollup -c ./rollup.config.js

test:
	npx jest ./src

publish:
	cd dist && \
	npm publish --access public