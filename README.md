# Portfolio API

Project installation and setup instructions :
```bash
pnpm install
```

Docker and database setup instructions :
```bash
docker-compose up

npx prisma generate

npx prisma migrate dev --name init
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