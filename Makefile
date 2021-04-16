ESLINT ?= ./node_modules/.bin/eslint
PRETTIER ?= ./node_modules/.bin/prettier
PRE_COMMIT ?= $(shell which pre-commit)
SRC_DIR ?= src/

lint: node_modules ## Lints the source using prettier, eslint and svelte-check.
	@$(PRETTIER) --check $(SRC_DIR)
	@$(ESLINT) -c .eslintrc.cjs $(SRC_DIR) --no-error-on-unmatched-pattern

fix: node_modules ## Fixes source code problems with prettier, eslint and pre-commit.
	@$(PRETTIER) --write $(SRC_DIR)
	@$(ESLINT) -c .eslintrc.cjs $(SRC_DIR) --no-error-on-unmatched-pattern --fix || true
