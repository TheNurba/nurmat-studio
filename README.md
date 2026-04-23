# Nurmat_MN Studio — сайт

Звукозапись жана аранжировка студиясынын бир баракчалуу промо-сайты.
**Stack:** Next.js 15 · React 19 · Tailwind CSS v4 · Framer Motion · lucide-react.

## Иштетүү

```bash
npm install
npm run dev
```

Андан кийин: [http://localhost:3000](http://localhost:3000)

## Продакшн build

```bash
npm run build
npm run start
```

## Деплой (Vercel)

1. GitHub репозиторийге push кылыңыз
2. [vercel.com/new](https://vercel.com/new) — репоны тандаңыз
3. Бир клик → даяр

## Контент кантип өзгөртүү керек

Бардык текст, баа, байланыш маалыматтары бир жерде:
**[lib/data.ts](./lib/data.ts)** — ушул файлды гана түзөтсөңүз жетиштүү.

## Структура

- `app/layout.tsx` — мета, шрифттер (Space Grotesk + Inter)
- `app/page.tsx` — бардык секцияларды чогултат
- `app/globals.css` — Tailwind v4 + glassmorphism/neon утилиталар
- `components/` — Header, Hero, Services, About, TechBase, Contact, CTA, Footer
- `lib/data.ts` — контент (единый источник)
