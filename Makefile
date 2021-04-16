ESLINT ?= ./node_modules/.bin/eslint
PRETTIER ?= ./node_modules/.bin/prettier
PRE_COMMIT ?= $(shell which pre-commit)
SRC_DIR ?= src/

lint: node_modules ## Lints the source using prettier and eslint
	@$(PRETTIER) --check $(SRC_DIR)
	@$(ESLINT) -c .eslintrc.cjs $(SRC_DIR) --no-error-on-unmatched-pattern

fix: node_modules ## Fixes source code problems with prettier
	@$(PRETTIER) --write $(SRC_DIR)
	@$(ESLINT) -c .eslintrc.cjs $(SRC_DIR) --no-error-on-unmatched-pattern --fix || true

install: node_modules ## Install dependencies

node_modules: package.json
	@yarn install

dev: install
	@yarn run dev -- --open
