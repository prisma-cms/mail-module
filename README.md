
## Module boilerplate server for [@prisma-cms](https://github.com/prisma-cms)

### Usage

#### Standalone

Download module

```
git clone https://github.com/prisma-cms/module-boilerplate
cd module-boilerplate
```
Install dependencies

`yarn install`

Update module schema 

`./module-boilerplate/src/modules/schema/` (see [instruction](https://github.com/prisma-cms/boilerplate#readme))

Deploy schema to prisma-server

`endpoint={NEW_PRISMA_ENDPOINT} yarn deploy`

Start server

`endpoint={CREATED_PRISMA_ENDPOINT} yarn start`

Open in brouser http://localhost:4000


#### Use as module for [@prisma-cms/boilerplate](https://github.com/prisma-cms/boilerplate)

Just add as module in mergeModules here: https://github.com/prisma-cms/boilerplate/blob/master/src/server/modules/index.mjs


### [Component-boilerplate](https://github.com/prisma-cms/component-boilerplate) usage as front-end for module.

```
git clone https://github.com/prisma-cms/component-boilerplate
cd component-boilerplate
yarn
yarn start
```
Open in brouser http://localhost:3000

Note that *module-boilerplate* should work on port 4000 or configure [proxySetup](https://github.com/prisma-cms/component-boilerplate/blob/master/src/setupProxy.js).
