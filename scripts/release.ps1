Write-Host ""
Write-Host "Checking TypeScript..."
npx tsc --noEmit

if ($LASTEXITCODE -ne 0) { exit 1 }

Write-Host ""
Write-Host "Building..."
npm run build

if ($LASTEXITCODE -ne 0) { exit 1 }

git add .

git commit -m "Portfolio automated release"

git push origin main

vercel whoami > $null 2>&1

if ($LASTEXITCODE -eq 0) {

    Write-Host ""
    Write-Host "Deploying to Vercel..."

    vercel --prod

}
else {

    Write-Host ""
    Write-Host "Run: vercel login"

}
