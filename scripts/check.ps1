Write-Host ""
Write-Host "Running TypeScript checks..."
npx tsc --noEmit

Write-Host ""
Write-Host "Building production bundle..."
npm run build

Write-Host ""
Write-Host "All checks completed."
