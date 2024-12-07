const { execSync } = require('child_process');
const path = require('path');

// Configuration
const config = {
  buildDir: '.next',
  outputDir: 'out',
  staticDir: 'public'
};

console.log('Starting deployment process...\n');

try {
  // Step 1: Clean previous builds
  console.log('Cleaning previous builds...');
  execSync('rm -rf .next out', { stdio: 'inherit' });
  console.log('✓ Clean complete\n');

  // Step 2: Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✓ Dependencies installed\n');

  // Step 3: Build the application
  console.log('Building application...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✓ Build complete\n');

  // Step 4: Export static files
  console.log('Exporting static files...');
  execSync('npm run export', { stdio: 'inherit' });
  console.log('✓ Export complete\n');

  // Step 5: Copy additional assets
  console.log('Copying additional assets...');
  execSync(`cp -r ${config.staticDir}/* ${config.outputDir}/`, { stdio: 'inherit' });
  console.log('✓ Assets copied\n');

  console.log('Deployment preparation complete! ✨\n');
  console.log('Next steps:');
  console.log('1. Upload the contents of the "out" directory to your web host');
  console.log('2. Configure your domain DNS settings');
  console.log('3. Set up SSL certificate if needed');
  console.log('\nFor more information, visit: https://nextjs.org/docs/deployment');

} catch (error) {
  console.error('\n❌ Deployment failed:', error.message);
  process.exit(1);
} 