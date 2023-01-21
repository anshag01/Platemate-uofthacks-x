import axios from 'axios'

/**
 * 
 * @param {number} long 
 * @param {number} lat 
 */
export const reverseGeocode = async (lat, long) => {
    const response = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&result_type=neighborhood&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
    return response.data.results[0].formatted_address;
} 

