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
   var resp=UrlFetchApp.fetch("https://api.genderize.io/?name="+fname+"&country_id=US");
   var   ans=resp.getContentText();
   var  ansJson=JSON.parse(ans),
   gender=ansJson["gender"],
   probability=ansJson["probability"]
   gender_count=ansJson["count"]
   output="";
   
  gender=gender.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  gender=gender.replace(/^;/, '').toTitleCase();
   }   catch(err) {
      Logger.log("Result not found" + err.message);
     return '';
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
    Logger.log("Must provide a first name");
    return;
  }
   try {
  var resp=UrlFetchApp.fetch("https://api.genderize.io/?name="+fname+"&country_id=US");
  Logger.log(resp);
  var   ans=resp.getContentText();
  Logger.log(ans)
  var  ansJson=JSON.parse(ans),

   gender_count=ansJson["count"]
   output="";
   
  Logger.log(gender_count);

   }   catch(err) {
      Logger.log("Darn, an Error " + err.message);
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
  var resp=UrlFetchApp.fetch("https://api.genderize.io/?name="+fname+"&country_id=US");
  Logger.log(resp);
  var   ans=resp.getContentText();
  Logger.log(ans)
  var  ansJson=JSON.parse(ans),

   gender_probability=ansJson["probability"]
   output="";
   
  Logger.log(gender_probability);

   }   catch(err) {
      Logger.log("Darn, an Error " + err.message);
     return '';
    }
        
 return gender_probability;
};
