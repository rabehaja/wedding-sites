/**
 * Google Apps Script for Madagascar Wedding RSVP
 *
 * SETUP:
 * 1. Create a new Google Spreadsheet
 * 2. Add these column headers in row 1:
 *    Timestamp | Name | Email | Guest Count | Guest Names | Guest Emails |
 *    Dietary Requirements | Dietary Other | Tour Interest | Preferred Regions |
 *    Stay Length | Travel Inland | Notes
 * 3. Go to Extensions > Apps Script
 * 4. Paste this entire script and save
 * 5. Click Deploy > New deployment
 * 6. Choose "Web app", set "Execute as" = Me, "Who has access" = Anyone
 * 7. Copy the web app URL and set it as NEXT_PUBLIC_RSVP_URL in your .env
 */

function doPost(e) {
  return handleRequest(e);
}

function doGet(e) {
  return handleRequest(e);
}

function handleRequest(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var p = e.parameter;

    sheet.appendRow([
      p.timestamp || new Date().toISOString(),
      p.name || "",
      p.email || "",
      p.guestCount || 1,
      p.guestNames || "",
      p.guestEmails || "",
      p.dietaryRequirements || "",
      p.dietaryOther || "",
      p.tourInterest || "",
      p.preferredRegions || "",
      p.stayLength || "",
      p.travelInland || "",
      p.notes || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ result: "success" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ result: "error", error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
