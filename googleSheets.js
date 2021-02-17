/* global gapi */
async function loadSheets(sheetId, range) {
  const params = {
    // The spreadsheet to request.
    spreadsheetId: sheetId, // TODO: Update placeholder value.
    // The ranges to retrieve from the spreadsheet.
    range: range
  };

  try {
    let response = await gapi.client.sheets.spreadsheets.values.get(params);
    // TODO: Change code below to process the `response` object:
    // console.log(response.result);
    return response.result;
  } catch (reason) {
    console.error("error: " + reason.result.error.message);
  }
}

function initClient() {
  const API_KEY = "AIzaSyDawuF9w42eROUj0QS65dYr5L9OT2x6QXM"; 

  const SCOPE = "https://www.googleapis.com/auth/drive.readonly";

  gapi.client
    .init({
      apiKey: API_KEY,
      scope: SCOPE,
      discoveryDocs: [
        "https://sheets.googleapis.com/$discovery/rest?version=v4"
      ]
    })
    .then(function () {
      console.log("Google sheets API was initialized.");
    });
}

function handleClientLoad() {
  gapi.load("client", initClient);
}
