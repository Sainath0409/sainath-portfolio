const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
};

const srcDir = path.join(__dirname, 'src');

walk(srcDir, (filePath) => {
    if (filePath.endsWith('.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');

        // Fix imported images being objects in Next.js
        // Find imports like: import heroImage from "../Img/s3.jpg";
        const importRegex = /import\s+(\w+)\s+from\s+['"]([^'"]+\.(?:jpg|png|svg|gif))['"]/g;
        let match;
        const importedImages = [];
        while ((match = importRegex.exec(content)) !== null) {
            importedImages.push(match[1]);
        }

        importedImages.forEach(imgVar => {
            // Replace src={heroImage} with src={heroImage.src}
            // But only if it's in a standard img tag, not Next Image (though user isn't using Next Image yet)
            const srcRegex = new RegExp(`src\\s*=\\s*\\{\\s*${imgVar}\\s*\\}`, 'g');
            content = content.replace(srcRegex, `src={${imgVar}.src || ${imgVar}}`);
        });

        // Fix process.env.PUBLIC_URL
        content = content.replace(/process\.env\.PUBLIC_URL\s*\+\s*/g, '');

        // Fix class to className
        content = content.replace(/class=/g, 'className=');

        // Remove invalid props from standard img tags
        content = content.replace(/\sunoptimized/g, '');
        content = content.replace(/\squality=\{\d+\}/g, '');

        // Add "use client"; if it uses hooks and doesn't have it
        if ((content.includes('useState') || content.includes('useEffect') || content.includes('useSelector') || content.includes('useDispatch') || content.includes('react-scroll') || content.includes('framer-motion')) && !content.startsWith('"use client";')) {
            content = '"use client";\n' + content;
        }

        fs.writeFileSync(filePath, content);
        console.log(`Updated ${filePath}`);
    }
});
