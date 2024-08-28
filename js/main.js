document.addEventListener("DOMContentLoaded", function() {
    const articles = [
        { title: "Example Article 1", url: "articles/example1.html", date: "2024-08-25" },
    ];

    const articleList = document.getElementById('article-list');
    articles.forEach(article => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = `${article.date}: ${article.title}`;
        listItem.appendChild(link);
        articleList.appendChild(listItem);
    });
});
