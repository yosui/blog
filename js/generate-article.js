const fs = require('fs');
const path = require('path');
const markdown = require('./markdown');

const postsDir = './posts';
const articlesDir = './articles';
const indexFile = './index.html';

let articleListItems = '';

fs.readdir(postsDir, (err, files) => {
    if (err) {
        console.error('Error reading posts directory:', err);
        throw err;
    }

    files.forEach(file => {
        const filePath = path.join(postsDir, file);
        let fileContent;
        try {
            fileContent = fs.readFileSync(filePath, 'utf8');
        } catch (err) {
            console.error(`Error reading file ${file}:`, err);
            return;
        }

        let htmlContent;
        try {
            htmlContent = markdown.toHTML(fileContent);
        } catch (err) {
            console.error(`Error converting markdown to HTML for file ${file}:`, err);
            return;
        }

        const articleFileName = file.replace('.md', '.html');
        const articleFilePath = path.join(articlesDir, articleFileName);

        const stats = fs.statSync(filePath);
        const date = stats.mtime.toISOString().split('T')[0];

        const htmlPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${file.replace('.md', '')}</title>
    <link rel="stylesheet" href="../css/styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1><a href="../index.html"><font color="#FFFFFF">Yosui Blog</font></a></h1>
            <p><font color="#FFFFFF">Published on ${date}</font></p>
        </div>
    </header>
    <main class="container">
        ${htmlContent}
    </main>
</body>
</html>`;

        try {
            fs.writeFileSync(articleFilePath, htmlPage, 'utf8');
        } catch (err) {
            console.error(`Error writing HTML file ${articleFileName}:`, err);
        }

        // Add the article to the list
        articleListItems += `<li><a href="${articleFilePath}">${date}: ${file.replace('.md', '')}</a></li>\n`;
    });

    // Update index.html with the new list of articles
    updateIndexFile(articleListItems);
});

function updateIndexFile(articleListItems) {
    let indexContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Yosui Blog</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <div class="container">
            <h1>Yosui Blog</h1>
            <nav>
                <a href="#">Economics</a>
                <a href="#">Crypto</a>
            </nav>
        </div>
    </header>
    <main class="container">
        <section id="articles">
            <h2>Articles</h2>
            <ul>
                ${articleListItems}
            </ul>
        </section>
    </main>
</body>
</html>`;

    try {
        fs.writeFileSync(indexFile, indexContent, 'utf8');
    } catch (err) {
        console.error('Error updating index.html:', err);
    }
}
