const { marked } = require('marked');

module.exports = {
    toHTML: (markdownContent) => {
        return marked(markdownContent);
    }
};
