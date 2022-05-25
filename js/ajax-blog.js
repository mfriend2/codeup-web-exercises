$.get('/data/blog.json').done(function (data) {
    console.log(data);
    $('#posts').html('');
    data.forEach(function (el) {
        let card = '<div class="card">'
        let title = '<h5 class="card-header bg-dark text-white">' + el.title + '</h5>';
        let content = '<div class="card-body">' + '<p class="card-text">' + el.content + '</p>';
        let categories = '<p class="fw-light">' + el.categories + '</p>';
        let date = '<footer class="blockquote-footer">' + 'Date Posted: ' + el.date + '</footer>' + '</div>' + '</div>';
        $('#posts').append(card + title + content + categories + date);
    })
});