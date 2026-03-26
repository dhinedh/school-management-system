const fs = require('fs');
const path = require('path');

const rootPath = path.join(__dirname, '../src/app');

function walk(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(dirPath);
  });
}

const standardResponsiveBlock = `
@media (max-width: 1024px) {
  .container {
    padding: 1.5rem 1rem !important;
  }

  .header {
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 1.25rem !important;
  }

  .statsGrid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 1rem !important;
  }

  .mainGrid {
    grid-template-columns: 1fr !important;
    gap: 1.5rem !important;
  }

  .actions {
    width: 100% !important;
    flex-wrap: wrap !important;
    gap: 0.75rem !important;
  }

  .actions button, .actions a {
    flex: 1 !important;
    min-width: 140px !important;
  }
}

@media (max-width: 768px) {
  .statsGrid {
    grid-template-columns: 1fr !important;
  }
}
`;

walk(rootPath, (filePath) => {
  if (filePath.endsWith('.module.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has a media query block
    if (content.includes('@media')) {
      return;
    }

    // Check for common layout classes
    const layoutClasses = ['.container', '.header', '.statsGrid', '.mainGrid', '.actions'];
    const hasAnyClass = layoutClasses.some(cls => content.includes(cls));

    if (hasAnyClass) {
      console.log('Updating ' + filePath);
      fs.appendFileSync(filePath, standardResponsiveBlock);
    }
  }
});

console.log('Bulk responsiveness update complete!');
