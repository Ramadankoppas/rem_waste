export default class Apis{
    constructor(){

    }
    async getDataFromServer(){
        return fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft',{
            method:'GET'
        }).then(response => response.json())
    }
}