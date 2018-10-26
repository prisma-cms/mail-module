## Prerequisites

- [Node.js](http://nodejs.org/) >= 10 must be installed.

## Installation

- Running `yarn` in the module's root directory will install everything you need for development.

## Running Tests

- `yarn test` will run the tests once.

## Deploy prisma schema
- `endpoint={PRISMA_ENDPOINT} yarn deploy`

API schema will be created also

## Deploy API schema only
- `yarn build-api`

## Start server

### With prisma
- `endpoint={PRISMA_ENDPOINT} yarn start`

### Standalone
- `yarn start`

## Building

- No building required
