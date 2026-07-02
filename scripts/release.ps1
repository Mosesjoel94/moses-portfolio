Write-Host ""
Write-Host "Checking project..."
npx tsc --noEmit

if ($LASTEXITCODE -ne 0) {
  Write-Host "TypeScript errors detected."
  exit 1
}

Write-Host ""
Write-Host "Building production bundle..."
npm run build

if ($LASTEXITCODE -ne 0) {
  Write-Host "Build failed."
  exit 1
}

git add .
git commit -m "Portfolio release"
git push

Write-Host ""
Write-Host "Release completed."
