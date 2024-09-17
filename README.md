# Build a GEN-q With Nextjs, React, Drizzle, Stripe (2024)

tech stack: Next.js, React, Drizzle, Stripe, Shadcn UI, Clerk, React Admin, NeonDB, Vercel

This is a repository for a "Build a genq With Nextjs, React, Drizzle, Stripe (2024)" .

Key Features:

- 🌐 Next.js 14 & server actions
- 🗣 AI Voices using Elevenlabs AI
- 🎨 Beautiful component system using Shadcn UI
- 🎭 Amazing characters thanks to KenneyNL
- 🔐 Auth using Clerk
- 🔊 Sound effects
- ❤️ Hearts system
- 🌟 Points / XP system
- 💔 No hearts left popup
- 🚪 Exit confirmation popup
- 🔄 Practice old lessons to regain hearts
- 🏆 Leaderboard
- 🗺 Quests milestones
- 🛍 Shop system to exchange points with hearts
- 💳 Pro tier for unlimited hearts using Stripe
- 🏠 Landing page
- 📊 Admin dashboard React Admin
- 🌧 ORM using DrizzleORM
- 💾 PostgresDB using NeonDB
- 🚀 Deployment on Vercel
- 📱 Mobile responsiveness
- 🎨 Customizable theme
- 📚 Documentation
- 📦 Easy to setup
- 📈 Analytics
- 📱 PWAs
- 🎉 And much more!

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone git@github.com:telagabirudigital/genq.git
```

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY = "";
CLERK_SECRET_KEY = "";
DATABASE_URL = "postgresql://...";
STRIPE_API_KEY = "";
NEXT_PUBLIC_APP_URL = "http://localhost:3000";
STRIPE_WEBHOOK_SECRET = "";
```

### Setup Drizzle ORM

```shell
npm run db:push

```

### Seed the app

```shell
npm run db:seed

```

or

```shell
npm run db:prod

```

### Start the app

```shell
npm run dev
```

### how to run stripe

https://docs.stripe.com/webhooks?lang=node#api-version

install stripe cli in your local machine

```shell
choco install stripe
```

install using choco if you are using windows,
if you are using mac or linux you can use brew or apt-get

```
brew install stripe
```

if already installed you can run this command

```shell
stripe login
```

then you can run this command to listen to the webhook

```shell
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

then you can copy the webhook secret and paste it in the .env file
set the STRIPE_WEBHOOK_SECRET to the webhook secret

#login to stripe dashboard

```shell
https://dashboard.stripe.com/test/webhooks
```

then you can add the webhook url to the stripe dashboard

```shell
login in to stripe dashboard
click on developers
click on webhooks
click on add endpoint
then you can add the webhook url
```

then you can add the webhook url to the stripe dashboard

````shell
for local development you can use the stripe cli to listen to the webhook
```shell
stripe listen --forward-to localhost:3000/api/webhooks/stripe
````

then you can copy the webhook secret and paste it in the .env file

# genq-supabase
