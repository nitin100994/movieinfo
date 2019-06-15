$(document).ready(function () {
    $('#searchForm').on('submit', (e) => {
        var searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });

    function getMovies(searchText) {
        axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=11e717c2&s=' + searchText)
            .then((res) => {
                console.log(res);
                let movies = res.data.Search;
                sessionStorage.setItem('searchText', searchText);
                console.log("movies", movies);
                let output = '';
                $.each(movies, (index, movie) => {
                    output += `
                <div class="col-md-3">
                    <div class="well text-center">
                        <img src="${movie.Poster}">
                        <h5>${movie.Title}</h5>
                        <a href="http://www.imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">Movie details</a>
                    </div>
                </div>
                `;
                });
                $('#movies').html(output);
            })
            .catch((err) => {
                console.log(err);
            });
    }
});
