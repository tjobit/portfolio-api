# Portfolio API

## Project installation and setup instructions :

Packages installation :
```bash
pnpm install
```

Environment variables setup :
```bash
Make a .env file in the root directory and add the variables as .env.example
```

Docker and database setup instructions :
```bash
docker compose up

npx prisma generate

npx prisma migrate dev
```

Start the server :
```bash
pnpm run dev
```

## Project usage instructions :

Start docker/database :
```bash
docker-compose up
```

On change in prisma.schema : 
```bash
npx prisma migrate dev --name <name>
```

To start the server :
```bash
pnpm run dev
```

To look at the database :
```bash
pnpm run studio
```