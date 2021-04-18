const request = require('postman-request')

const forecast = (latitude, longitude , callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=f31499b1ed15f562116550d1c9bb1e3f&query='+ latitude + ',' + longitude + '&units=f'

request({ url, json: true }, (error, {body}) => {
    if(error) {
        callback('unable to connect to forecast-app', undefined )
    } else if (body.error) {
       callback('location not found.' , undefined)
    } else {
        callback( undefined,'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degree temperature . There is a ' + body.current.precip + ' % chance of rain.') 
    } 
})
}

module.exports = forecast 