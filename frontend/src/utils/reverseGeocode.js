import axios from 'axios'

/**
 * 
 * @param {number} long 
 * @param {number} lat 
 */
export const reverseGeocode = async (long, lat) => {
    const response = await axios.post(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${long},${lat}&&key=${process.env.REACT_APP_GOOGLE_API_KEY}`);
    console.log(response.data)
    return response.data['formatted_address']
} 

