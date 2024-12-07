const fs = require('fs');
const path = require('path');

// Create necessary directories
const directories = [
  'public/images/team',
  'public/images/portfolio',
  'public/images/events'
];

// Create directories
console.log('Creating image directories...');
directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Required images checklist
console.log('\nRequired Images:');
console.log('---------------');
console.log('Team Photos:');
console.log('□ rick-blue-suit.jpg - Professional headshot in blue suit');
console.log('□ rick-city.jpg - City backdrop photo');
console.log('□ angel-profile.jpg - Professional headshot');
console.log('□ team-photo.jpg - Full team photo');

console.log('\nEvent Photos:');
console.log('□ community-event.jpg - Community engagement');
console.log('□ business-event.jpg - Business presentations');

console.log('\nImage Requirements:');
console.log('------------------');
console.log('1. Format: JPG/JPEG');
console.log('2. Resolution: Minimum 1200px width');
console.log('3. File size: < 500KB');
console.log('4. Naming: lowercase with hyphens');

console.log('\nDirectories:');
console.log('------------');
directories.forEach(dir => {
  console.log(`□ ${dir}`);
}); 