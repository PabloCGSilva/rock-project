
document.addEventListener("DOMContentLoaded", e => {
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
    }
    )
}
)
