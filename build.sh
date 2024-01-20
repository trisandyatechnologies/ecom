#!/bin/bash

#pull latest
git pull origin main

#install new deps
npm install

#prisma
npx prisma generate
npx prisma db push

#build the repo
npm run build

#restart pm2 process
pm2 restart mart

# To start for the first time
# pm2 start --name=mart npm -- start
