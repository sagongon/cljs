const { google } = require('googleapis');
const { JWT } = require('google-auth-library');
const credentials = require('./credentials.json'); // הקובץ שהורדת מ-GCP

// פרטי הגיליון שלך
const spreadsheetId = '1iQNsYbU3hpmKiXOAqo1C5wuj03zABQgS_G07waf2Cis'; // שים כאן את ה-ID של הגיליון
const range = 'Atempts!W2'; // שים כאן את הטווח שאתה רוצה לעדכן

async function writeToSheet() {
  const client = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  const sheets = google.sheets({ version: 'v4', auth: client });

  const res = await sheets.spreadsheets.values.update({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [['תוצאה שנכתבה בהצלחה!']],
    },
  });

  console.log('✅ Success:', res.data);
}

writeToSheet().catch(console.error);
