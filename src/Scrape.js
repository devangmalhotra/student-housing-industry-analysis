class Scrape {
    constructor(city) {
        this.city = city;
        this.browser = null;
        this.page = null;
    }

    getCityFunction() {
        let cityMethodString = `${this.city}Scrape`
        const link = `https://www.kijiji.ca/b-canada/student-housing-${this.city}/k0l0?dc=true&view=list`;

        return eval(`this.${cityMethodString}('${link}')`); // maybe change this since less secure
    }

    async initialize() {
        this.browser = await puppeteer.launch();
        this.page = await puppeteer.newPage();

    }
    
    waterlooScrape(link) {
        console.log(link);
    }

    torontoScrape(link) {
        console.log(link);
    }

    hamiltonScrape(link) {
        console.log(link);
    }
}

export default Scrape
