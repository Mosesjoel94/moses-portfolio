npx tsc --noEmit

if ($LASTEXITCODE -ne 0) {
    exit 1
}

npm run build

if ($LASTEXITCODE -ne 0) {
    exit 1
}

git add .
git commit -m "Automated portfolio update"

git push origin main

vercel --prod
