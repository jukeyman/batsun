const fs = require('fs');
const path = require('path');

// Required directories
const requiredDirs = [
  'public/images/portfolio',
  'public/images/team',
  'src/app/about/angel-lewis-jefferson',
  'src/app/insights/author/angel-lewis-jefferson',
  'src/app/services',
  'src/app/locations',
  'src/components/layout',
  'src/libs'
];

// Required files
const requiredFiles = [
  'src/app/about/angel-lewis-jefferson/page.js',
  'src/app/insights/author/angel-lewis-jefferson/page.js',
  'src/libs/localSEO.js',
  'src/libs/generateCitations.js',
  'src/components/layout/headers/MainMenu.js',
  'src/libs/getAllPortfolios.js',
  'src/libs/getAllBlogs.js',
  'src/libs/getAllServices.js'
];

// Required images
const requiredImages = [
  'public/images/portfolio/ai-chatbot.jpg',
  'public/images/portfolio/automation.jpg',
  'public/images/portfolio/digital-transform.jpg',
  'public/images/portfolio/analytics.jpg',
  'public/images/portfolio/business-formation.jpg',
  'public/images/portfolio/government.jpg',
  'public/images/team/angel-lewis.jpg',
  'public/images/team/team-photo.jpg'
];

// Business information to verify
const businessInfo = {
  name: 'RJ Business Solutions',
  domain: 'rjbizsolution.com',
  email: 'support@rjbizsolution.com',
  phone: '(844) 906-0865',
  address: '1342 NM-333, Ste C #5254, Tijeras, NM 87059'
};

console.log('Starting verification process...\n');

// Check directories
console.log('Checking required directories...');
requiredDirs.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (fs.existsSync(fullPath)) {
    console.log(`✓ ${dir} exists`);
  } else {
    console.log(`✗ ${dir} missing`);
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`  Created ${dir}`);
  }
});

// Check files
console.log('\nChecking required files...');
requiredFiles.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    console.log(`✓ ${file} exists`);
    
    // Check for business information in key files
    if (file.includes('localSEO.js') || file.includes('MainMenu.js')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      Object.entries(businessInfo).forEach(([key, value]) => {
        if (content.includes(value)) {
          console.log(`  ✓ Contains ${key}`);
        } else {
          console.log(`  ✗ Missing ${key}: ${value}`);
        }
      });
    }
  } else {
    console.log(`✗ ${file} missing`);
  }
});

// Check images
console.log('\nChecking required images...');
requiredImages.forEach(image => {
  const fullPath = path.join(process.cwd(), image);
  if (fs.existsSync(fullPath)) {
    console.log(`✓ ${image} exists`);
  } else {
    console.log(`✗ ${image} missing`);
  }
});

// Verify package.json
console.log('\nVerifying package.json...');
const packageJson = require('../package.json');
const requiredDependencies = [
  'next',
  'react',
  'react-dom'
];

requiredDependencies.forEach(dep => {
  if (packageJson.dependencies[dep]) {
    console.log(`✓ ${dep} installed (${packageJson.dependencies[dep]})`);
  } else {
    console.log(`✗ ${dep} missing`);
  }
});

// Summary
console.log('\nVerification Summary:');
console.log('--------------------');
console.log('1. Check all ✗ items above and address them');
console.log('2. Ensure all business information is correct');
console.log('3. Verify all images are properly formatted');
console.log('4. Run npm run build to test for any build errors');
console.log('\nFor deployment:');
console.log('1. npm run build');
console.log('2. Test the build locally: npm start');
console.log('3. Deploy to production server');
console.log('\nContact support@rjbizsolution.com for assistance'); 