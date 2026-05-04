// ── Configuration: fill these three values before deploying ──
var SHEET_ID            = 'YOUR_GOOGLE_SHEET_ID_HERE';       // from Sheet URL: /d/<ID>/edit
var CHANNEL_ACCESS_TOKEN = 'YOUR_CHANNEL_ACCESS_TOKEN_HERE'; // LINE Developers → Messaging API → Channel access token
var OWNER_USER_ID        = 'YOUR_LINE_USER_ID_HERE';         // LINE Developers → top-right profile → "Your user ID"

function doPost(e) {
  try {
    var name    = (e.parameter.name    || '').trim();
    var phone   = (e.parameter.phone   || '').trim();
    var address = (e.parameter.address || '').trim();
    var ts      = Utilities.formatDate(new Date(), 'Asia/Taipei', 'yyyy-MM-dd HH:mm:ss');

    SpreadsheetApp.openById(SHEET_ID).getActiveSheet()
      .appendRow([ts, name, phone, address]);

    var message = '【牛樟緣】試喝包申請\n時間：' + ts
                + '\n姓名：' + name
                + '\n電話：' + phone
                + '\n地址：' + address;

    UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', {
      method: 'post',
      headers: {
        'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
        'Content-Type': 'application/json'
      },
      payload: JSON.stringify({
        to: OWNER_USER_ID,
        messages: [{ type: 'text', text: message }]
      })
    });

    return ContentService.createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Run this from GAS editor to test without a browser
function testDoPost() {
  var fake = { parameter: { name: '測試', phone: '0912345678', address: '台中市西屯區某路1號' } };
  Logger.log(doPost(fake).getContent());
}
