module.exports.filterByStars = function filterByStars(array, stars) {
    const allCountriesNames = Object.keys(array[0]);
    let countryFilteredHotelsList = [];
      allCountriesNames.forEach(country => {
        const countryHotels = array[0][country];
        let tempCountryFilteredHotelsList = Object.values(countryHotels).filter(item => item.stars == stars);
        tempCountryFilteredHotelsList = Object.values(tempCountryFilteredHotelsList).filter(item => item.destination = country); 
        if (tempCountryFilteredHotelsList.length > 0) {
        tempCountryFilteredHotelsList = Object.assign({}, tempCountryFilteredHotelsList[0]);
        countryFilteredHotelsList.push(tempCountryFilteredHotelsList);
        }
      });
    const responseStringified = JSON.stringify(countryFilteredHotelsList);
    return responseStringified;
} 