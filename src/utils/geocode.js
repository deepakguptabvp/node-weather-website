const request = require ('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiZGVlcGFrMTk5IiwiYSI6ImNrbHE5OWlobzAwZmkycW1wM2N1ZW94YnQifQ.p2Wi2Jgt2aaKaqylOufuiQ&limit=1'

    request ({url , json: true}, (error , {body}) => {
            if (error) {
                    callback('unable to connect to location services !' , undefined)
            } else if (body.features.length ===0) {
                    callback('unable to find location. Try another search !' , undefined )

            } else {
                    callback(undefined, {
                            latitude: body.features[0].center[1],
                            longitude: body.features[0].center[0],
                            location: body.features[0].place_name
                    })
            }
    })
}

module.exports = geocode 