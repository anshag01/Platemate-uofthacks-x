export default placeDetailsHandler = (req, res, next) => {
    axios
        .get(
            `https://maps.googleapis.com/maps/api/place/details/json?fields=name,editorial_summary,rating,price_level,formatted_address,opening_hours&place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&key=${process.env.GOOGLE_MAPS_API_KEY}`
        )
        .then((placeData) => console.log(placeData.data))
        .catch((err) => next(err));
};
