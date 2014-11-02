### Short documentation for getting ZIP Codes

Import a Google sheet script from here:
```
https://github.com/mroswell/geoscripts/raw/master/getGeo.js
```
and implement the getZip() function

Also implement the getCounty() and getCity() to help find anomalies.



### Detailed documentation 

1. Create a Google sheet using drive.google.com > Create > Spreadsheet

2. Populate your spreadsheet with as much structured address information as you have.

3. From the Tools menu, choose *** Script Editor > Blank.*** This will open a new tab.

4. Open yet another tab, and visit 
```
https://github.com/mroswell/geoscripts/blob/master/getGeo.js
```
5. Click the "Raw" button.

6. Select all the text and copy to the clipboard (Click inside the script, press Cmd-A to select all, and Cmd-C to copy)

7. Go back to the nearly blank script, and replace what's there with the new script (Click inside the script, press Cmd-A to select all, and Cmd-V to copy from the clipboard.)

8. Save the script. Name it as you please. You could optionally call it getGeo.

9. Return to the spreadsheet tab.

10. In a column likely to the right of your data, enter
  ```
  =getCity(A1:B1) 
  ```
assuming fields A1 and B1 are street and state.

11. Copy the field down to all rows in the spreadsheet (should reformat to =getCity(A2:B2), etc. Each entry may take up to 4 seconds to be returned. This is on purpose, as Google complains if the Google Map API is hit all at the same time with a lot of addresses. (you can adjust that number in the script, for instance, change the sleep number 4000 to 3000 for each function.)

12. It will also be helpful in truth-testing this, to add two more field columns.
  ```
  =getCounty(a1:b1)
  ```
  and
  ```
  =getZip(a1:b1)
  ```
  (Propagate through the rest of the rows)

### More notes 

Review anomalous counties and zip codes. Obviously, a common address like 10 Main Street, in the absence of other information, is not likely to return an accurate city or zip (as there may be multiple 10 Main Streets in the county). But if the county is correct, it's probably the right city.

If you start with just a street name, it's tempting to run getCity() and then getZip() on all of your newly acquired data, including your newly found city. But be sure to vet inputs. Generally, it's a good idea to first do the getZip() and getCounty() on your original data.

You do not need to place an address in multiple fields. for instance "150 Court St, NY" in a single field will return the proper city: Brooklyn. In that case the formula would be something like =getCity(a1)

Google may complain about daily limits. (I'm not sure what the limit is, in terms of the number of API hits.) I've sometimes found that using a different spreadsheet (or a different Google account) can bypass that.

Do internet research to double-check likely anomalous addresses.

All the best,

Margie
