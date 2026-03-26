import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootPath = path.join(__dirname, '../src/app');

function walk(dir, callback) {
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
    flex-direction: column;
    align-items: flex-start !important;
    gap: 1.25rem;
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
    width: 100%;
    flex-wrap: wrap;
    gap: 0.75rem !important;
  }

  .actions button, .actions a {
    flex: 1;
    min-width: 140px;
  }
}

@media (max-width: 640px) {
  .statsGrid {
    grid-template-columns: 1fr !important;
  }
}
`;

walk(rootPath, (filePath) => {
  if (filePath.endsWith('.module.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already has a media query block (roughly)
    if (content.includes('@media')) {
      console.log(\`Skipping \${filePath} - media query already exists\`);
      return;
    }

    // Check for common layout classes
    const layoutClasses = ['.container', '.header', '.statsGrid', '.mainGrid', '.actions'];
    const hasAnyClass = layoutClasses.some(cls => content.includes(cls));

    if (hasAnyClass) {
      console.log(\`Updating \${filePath}\`);
      fs.appendFileSync(filePath, standardResponsiveBlock);
    }
  }
});

console.log('Bulk responsiveness update complete!');
