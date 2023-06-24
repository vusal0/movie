for (let i = 0; i < 13; i++) {
    $.ajax({
        method: 'GET',
        url: 'https://api.tvmaze.com/shows/' + i,
        url: 'https://api.tvmaze.com/shows/'+i,
        success: function (res) {

            $('#films .row').append(`
                <div class="col-3">
                        <div class="film-card p-4">
                            <div class="film-img badge">
                                <img src="${res.image.medium}" alt="">
                                <span class="status"></span>
                                <a target="_blank" href="details.html?id=${res.id}">
                                    <img src="${res.image.medium}" alt="">
                                    <span class="status"></span>
                                </a>
                            </div>
                            <div class="card-body">
                                <div class="film-rate">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-star-filled" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" stroke-width="0" fill="currentColor"></path>
                                    </svg>
                                    <span>${res.rating.average}</span>
                                </div>
                                <div class="film-title"><h4>${res.name}</h4></div>
                                <div class="film-genres"><p>${res.genres}</p></div>
                            </div>
                            <div class="card-footer">
                                <a href="" class="btn btn-main">details</a>
                                <a target="_blank" href="details.html?id=${res.id}" class="btn btn-main">details</a>
                            </div>
                        </div>
                    </div>
                </div>
            `)
        },
        
        error: function(err){
            console.log(err);
        }
    })
}
console.log($('#films .row'));