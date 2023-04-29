function myFunction() {
  /* define the spreadsheet */
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');

  /* count the number of filled rows */
  var numRows = sheet.getLastRow() + 1;
  console.log(numRows);

  /* set your initial group of 10 rows */
  var start = 1;

  /* initiate a while loop */
  while (start < numRows) {
    /* define the range */
    var range = sheet.getRange(start, 1, 10, 1);

    /* get the range values */
    var rangeValues = range.getValues();
    console.log(rangeValues);

    /* sum the range values */
    var rangeSum = 0;
    for (var i = 0; i < rangeValues.length; i++) {
      rangeSum += rangeValues[i][0];
    }
    console.log(rangeSum);

    /* count the number of values in the range */
    var rangeCount = rangeValues.filter(n=> n > 0).length;
    console.log(rangeCount);

    /* divide the rangeSum by the rangeCount to get an average for the range */
    var rangeAvg = rangeSum/rangeCount;
    console.log(rangeAvg);

    /* print the output to the sheet */
    var outputRange = sheet.getRange(start, 2);
    outputRange.setValue(rangeAvg);

    /* iterate start */
    var start = start + 10;
  }
}
