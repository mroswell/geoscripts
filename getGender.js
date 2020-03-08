String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

/**
 * Looks up a firstname's probable gender using the 
 * Genderize API.
 *
 * @param {string} fname A first name string (
 * @return The gender 
 * @customfunction
 */
function getGender(fname) {
    if (fname == '') {
        Logger.log("Must provide a first name");
        return;
    }
    try {
        var resp = UrlFetchApp.fetch("https://api.genderize.io/?name=" + fname + "&country_id=US");
        var ans = resp.getContentText();
        var ansJson = JSON.parse(ans);
        gender = ansJson["gender"]
       //gender = gender.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
       gender = gender.toProperCase();
   } catch (err) {
   //     Logger.log("Result not found" + err.message);
        return 'not found';
    }

    return gender;
};

/**
 * Looks up a firstname's gender count that informs the 
 * Genderize API.
 *
 * @param {string} fname A first name string (
 * @return The gender 
 * @customfunction
 */
function getGenderCount(fname) {
    if (fname == '') {
        return;
    }
    try {
        var resp = UrlFetchApp.fetch("https://api.genderize.io/?name=" + fname + "&country_id=US");
        var ans = resp.getContentText();
        var ansJson = JSON.parse(ans);
        var gender_count = ansJson["count"];
        var output = "";
    } catch (err) {
        Logger.log("Result not found" + err.message);
        return '';
    }

    return gender_count;
};

/**
 * Looks up a firstname's probability that the reported gender is accurate from
 * Genderize API.
 *
 * @param {string} fname A first name string (
 * @return The gender 
 * @customfunction
 */
function getGenderProbability(fname) {
    if (fname == '') {
        Logger.log("Must provide a first name");
        return;
    }
    try {
        var resp = UrlFetchApp.fetch("https://api.genderize.io/?name=" + fname + "&country_id=US");
        var ans = resp.getContentText();
        var ansJson = JSON.parse(ans);
        var gender_probability = ansJson["probability"];
        var output = "";
    } catch (err) {
        Logger.log("Result not found" + err.message);
        return '';
    }

    return gender_probability;
};
