const fs = require('fs');
const path = require('path');

// Photo mappings
const photoMappings = [
  {
    source: '1C5462F0-647D-4F7A-BE54-561B43DFA59E_1_105_c.jpeg',
    destination: 'public/images/team/angel-profile.jpg',
    description: 'Angel professional photo'
  },
  {
    source: '5F052841-7E43-49F2-9600-7A6D96142CC0_4_5005_c.jpeg',
    destination: 'public/images/team/team-family.jpg',
    description: 'Team and family photo'
  },
  {
    source: 'DB70423F-C843-4864-AED6-BBBEC7F99D7F_1_105_c.jpeg',
    destination: 'public/images/team/rick-blue-suit.jpg',
    description: 'Rick in blue suit'
  },
  {
    source: '598CC38D-BDF3-4F6E-869A-F8CA092F8EC0_4_5005_c.jpeg',
    destination: 'public/images/team/family-portrait.jpg',
    description: 'Family portrait'
  },
  {
    source: 'D64D8A4E-8253-432B-ABA3-97986FACEB25_4_5005_c.jpeg',
    destination: 'public/images/events/community-event.jpg',
    description: 'Community event photo'
  },
  {
    source: 'A27A2F90-70F1-4B3C-BCED-B6D6421FF466_1_102_o.jpeg',
    destination: 'public/images/team/rick-city.jpg',
    description: 'Rick city backdrop'
  },
  {
    source: '22B39D3C-E568-4DF0-B6E4-FE39A4F2C3AD_4_5005_c.jpeg',
    destination: 'public/images/events/business-event.jpg',
    description: 'Business event photo'
  },
  {
    source: '6476D8E2-ADB7-4FCA-A495-F6DFD10E007D_1_105_c.jpeg',
    destination: 'public/images/team/leadership-photo.jpg',
    description: 'Leadership team photo'
  }
];

// Create directories if they don't exist
const directories = [
  'public/images/team',
  'public/images/events',
  'public/images/portfolio'
];

console.log('Setting up photo directories...');
directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Move and rename photos
console.log('\nProcessing photos...');
const downloadsPath = path.join(process.env.USERPROFILE, 'Downloads');
console.log(`Looking for photos in: ${downloadsPath}`);

photoMappings.forEach(photo => {
  const sourcePath = path.join(downloadsPath, photo.source);
  const destPath = path.join(process.cwd(), photo.destination);
  
  try {
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✓ Processed: ${photo.description}`);
      console.log(`  From: ${photo.source}`);
      console.log(`  To: ${photo.destination}`);
    } else {
      console.log(`✗ Source not found: ${photo.source}`);
    }
  } catch (error) {
    console.log(`✗ Error processing ${photo.source}:`);
    console.log(`  ${error.message}`);
  }
});

console.log('\nPhoto Setup Complete!');
console.log('--------------------');
console.log('Next steps:');
console.log('1. Verify all photos were copied correctly');
console.log('2. Check image quality and sizes');
console.log('3. Optimize images if needed');
console.log('4. Update website to use new image paths'); 