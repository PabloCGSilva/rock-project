function myFunction(query) {
    console.log('ok')
    const form = document.querySelector("#searchform")
    form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const query = form.elements.query.value;
        const ticketquery = await axios.get(`https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=KNcuyTpIb5us9ZvJcJrtfwT7SMhFiyJk&keyword=${query}`)
        const youtubequery = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyCrpAF9lG4Isc-Gnnzx76JbbADJS5estfE&type=video&part=snippet&maxResults=12&q=${query}`)

        if (ticketquery.status >= 400 && ticketquery.status < 600) {
            console.log(`error: ${ticketquery.status}`);
            throw new Error("Bad ticketqueryponse from server");
        }

        for (let i = 0; i < 10; i++) {
            const divticket = document.createElement('div-ticket')
            const divvideos = document.createElement('div-videos')
            const name = document.createTextNode(ticketquery.data._embedded.attractions[i].name)
            const url = document.createTextNode(ticketquery.data._embedded.attractions[i].url)
            const title = document.createTextNode(youtubequery.data.items[i].snippet.title)
            const link = document.createElement('a')
            const img = document.createElement('img')
            const video = document.createElement('video')
            const thumb = document.createElement('img')


            img.src = ticketquery.data._embedded.attractions[i].images[0].url
            thumb.src = youtubequery.data.items[i].snippet.thumbnails.default.url
            link.append(url)
            divticket.appendChild(name, img.src)
            divvideos.appendChild(title, thumb.src, video)

            document.body.append(divticket, link, img);
            document.body.append(divvideos, thumb)
        }
    }
    )
}