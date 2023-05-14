# Tigris TS/JS Client Library HTTP

# Documentation

- [Tigris Overview](https://www.tigrisdata.com/docs/concepts/)
- [Getting Started](https://www.tigrisdata.com/docs/quickstarts/)
- [Database](https://www.tigrisdata.com/docs/sdkstools/typescript/database/)
- [Search](https://www.tigrisdata.com/docs/sdkstools/typescript/database/search/)

# Building

```
# build
npm run build

# test
npm run test

# lint
npm run lint
```

# Code Quality

## 1. Linting

The coding style rules are defined by [Prettier](https://prettier.io/) and
enforced by [Eslint](https://eslint.org)

## 2. Git Hooks

We use [pre-commit](https://pre-commit.com/index.html) to automatically
setup and run git hooks.

Install the pre-commit hooks as follows:

```shell
pre-commit install
```

On every `git commit` we check the code quality using prettier and eslint.

# License

This software is licensed under the [Apache 2.0](LICENSE).
