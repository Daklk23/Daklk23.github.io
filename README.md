# Vantage Roleplay Website

Ovaj projekat predstavlja osnovu za Vantage Roleplay FiveM server.

## Features

- Dark/light tema sa next-themes
- Live broj igrača iz FiveM endpointa
- Discord widget i auth preko Discord-a
- Admin panel za korisnike sa ROLE_ADMIN
- Prilagođena 404 stranica za nepostojeće rute

## Pokretanje

1. `cp .env.example .env` i popunite vrednosti.
2. `pnpm install`
3. `pnpm prisma migrate dev`
4. `pnpm dev`

## Deploy

Predviđen za Vercel. Postavite environment promenljive i pokrenite `prisma migrate deploy` tokom build-a.
