/**
 * Looks up an address' probable ZIP code using the 
 * Google geocoder.
 *
 * @param {string} address An address string (May consist of multiple cells, such as street, city, and state).
 * @return The ZIP of first matched address.
 * @customfunction
 */
 function getZip(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  var location;
  Utilities.sleep(Math.random() * 4000);
  location = geocoder.geocode(address);
  if (location.status == 'OK') {
    zip = extractFromAddress(location["results"][0].address_components, "postal_code");
 return zip;
  }
};

/**
 * Looks up an address' probable County using the 
 * Google geocoder.
 *
 * @param {string} address An address string (May consist of multiple cells, such as street, city, and state).
 * @return The County of first matched address.
 * @customfunction
 */
 function getCounty(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  Utilities.sleep(Math.random() * 4000);
  var location;
  location = geocoder.geocode(address);
  if (location.status == 'OK') {
      county = extractFromAddress(location["results"][0].address_components, "administrative_area_level_2");
 return county;
  }
};

/**
 * Looks up an address' probable City using the Google geocoder.
 *
 * @param {string} address An address string (May consist of multiple cells, such as street, state, and zip).
 * @return The City of first matched address.
 * @customfunction
 */
 function getCity(address) {
  if (address == '') {
    Logger.log("Must provide an address");
    return;
  }
  var geocoder = Maps.newGeocoder();
  Utilities.sleep(Math.random() * 4000);
  var location;
  var city;
  location = geocoder.geocode(address);
  if (location.status == 'OK') {
      city = extractFromAddress(location["results"][0].address_components, "locality");
 return city;
  }
};

function extractFromAddress(components, type){
    for (var i=0; i<components.length; i++)
        for (var j=0; j<components[i].types.length; j++)
            if (components[i].types[j]==type) return components[i].long_name;
    return "";
}
