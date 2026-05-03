# Restro Nexus Backend

Backend API for Restro Nexus, built with NestJS, MikroORM, and PostgreSQL.

The project currently provides application bootstrap, environment validation,
Swagger setup, MikroORM entity registration, migrations, a health endpoint, and
the first domain modules for brand, branch, user, auth, stock, unit, and audit
data.

## Stack

- Node.js with NestJS 11
- PostgreSQL
- MikroORM 7 with migrations
- Swagger/OpenAPI
- `class-validator` and `class-transformer`
- Helmet and configurable CORS
- Jest, ESLint, and Prettier

## Project Structure

```text
src/
  app.module.ts                 Root Nest module
  main.ts                       App bootstrap, global prefix, CORS, Swagger
  config/
    env.validation.ts           Required environment variables
    mikro-orm.config.ts         Runtime MikroORM config
    swagger.ts                  Swagger and CORS helpers
  database/
    entities.ts                 Central MikroORM entity registry
    migrations/                 MikroORM migrations
  modules/
    brands/                     Brand CRUD module
    branches/                   Branch schema module
    roles/                      Role schema module
    users/                      User and user role assignment schema module
    auth/                       User session schema module
    stock-locations/            Stock location schema module
    units-of-measure/           Unit of measure schema module
    unit-conversions/           Unit conversion schema module
    audit-logs/                 Audit log schema module
```

## Domain Tables

The current entity registry includes:

- `brands`
- `branches`
- `roles`
- `users`
- `user_role_assignments`
- `user_sessions`
- `stock_locations`
- `units_of_measure`
- `unit_conversions`
- `audit_logs`

Most modules currently register entities and database schema only. The `brands`
module includes controller/service/DTO files for CRUD behavior. The health
endpoint is available at `/{API_PREFIX}/health`.

## Environment Variables

Create a `.env` file in the project root with these keys:

```env
NODE_ENV=development
APP_NAME="Restro Nexus"
APP_PORT=3000
API_PREFIX=api
CORS_ORIGINS=http://localhost:3000

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=restro_nexus

JWT_ACCESS_SECRET=change-me
JWT_REFRESH_SECRET=change-me
JWT_ACCESS_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
```

`CORS_ORIGINS` accepts a comma-separated list. Use `*` only for local or
temporary development cases where credentialed requests are not required.

## Installation

```bash
pnpm install
```

## Database

MikroORM is configured for PostgreSQL and reads entities from
`src/database/entities.ts`.

Run pending migrations:

```bash
npx mikro-orm migration:up
```

Create a new migration after changing entities:

```bash
npx mikro-orm migration:create
```

Migration files are stored in `src/database/migrations` during development and
compiled to `dist/database/migrations` for production builds.

## Running The App

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production build
pnpm run build
pnpm run start:prod
```

Swagger is available at:

```text
/{API_PREFIX}/docs
```

For example, if `API_PREFIX=api` and `APP_PORT=3000`:

```text
http://localhost:3000/api/docs
```

Health check:

```text
GET /{API_PREFIX}/health
```

## Quality Commands

```bash
# compile TypeScript
pnpm run build

# lint
pnpm run lint

# auto-fix lint issues
pnpm run lint:fix

# format source and tests
pnpm run format

# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

## Development Notes

- Entity properties use camelCase in TypeScript and map to snake_case columns in
  PostgreSQL through MikroORM naming behavior or explicit `fieldName` settings.
- Feature modules should register their entities with `MikroOrmModule.forFeature`
  and add the entity class to `src/database/entities.ts`.
- Add a migration whenever entity metadata changes.
- Keep table creation order aligned with foreign key dependencies. Current
  migrations create base tables before dependent tables.

## License

This project is private and currently marked `UNLICENSED` in `package.json`.
