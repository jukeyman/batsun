# Deployment configuration
$buildDir = ".next"
$outputDir = "out"
$staticDir = "public"

Write-Host "Starting deployment process...`n" -ForegroundColor Cyan

try {
    # Step 1: Clean previous builds
    Write-Host "Cleaning previous builds..." -ForegroundColor Yellow
    if (Test-Path $buildDir) { Remove-Item $buildDir -Recurse -Force }
    if (Test-Path $outputDir) { Remove-Item $outputDir -Recurse -Force }
    Write-Host "✓ Clean complete`n" -ForegroundColor Green

    # Step 2: Install dependencies
    Write-Host "Installing dependencies..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) { throw "npm install failed" }
    Write-Host "✓ Dependencies installed`n" -ForegroundColor Green

    # Step 3: Build the application
    Write-Host "Building application..." -ForegroundColor Yellow
    npm run build
    if ($LASTEXITCODE -ne 0) { throw "Build failed" }
    Write-Host "✓ Build complete`n" -ForegroundColor Green

    # Step 4: Export static files
    Write-Host "Exporting static files..." -ForegroundColor Yellow
    npm run export
    if ($LASTEXITCODE -ne 0) { throw "Export failed" }
    Write-Host "✓ Export complete`n" -ForegroundColor Green

    # Step 5: Copy additional assets
    Write-Host "Copying additional assets..." -ForegroundColor Yellow
    Copy-Item -Path "$staticDir\*" -Destination $outputDir -Recurse -Force
    Write-Host "✓ Assets copied`n" -ForegroundColor Green

    Write-Host "Deployment preparation complete! ✨`n" -ForegroundColor Cyan
    Write-Host "Next steps:" -ForegroundColor White
    Write-Host "1. Upload the contents of the 'out' directory to your web host"
    Write-Host "2. Configure your domain DNS settings"
    Write-Host "3. Set up SSL certificate if needed"
    Write-Host "`nFor more information, visit: https://nextjs.org/docs/deployment`n"

} catch {
    Write-Host "`n❌ Deployment failed: $_" -ForegroundColor Red
    exit 1
} 