// ── Configuration: fill these two values before deploying ──
var SHEET_ID   = 'YOUR_GOOGLE_SHEET_ID_HERE';   // from Sheet URL: /d/<ID>/edit
var LINE_TOKEN = 'YOUR_LINE_NOTIFY_TOKEN_HERE';  // from notify-bot.line.me

function doPost(e) {
  try {
    var name    = (e.parameter.name    || '').trim();
    var phone   = (e.parameter.phone   || '').trim();
    var address = (e.parameter.address || '').trim();
    var ts      = Utilities.formatDate(new Date(), 'Asia/Taipei', 'yyyy-MM-dd HH:mm:ss');

    SpreadsheetApp.openById(SHEET_ID).getActiveSheet()
      .appendRow([ts, name, phone, address]);

    UrlFetchApp.fetch('https://notify-api.line.me/api/notify', {
      method: 'post',
      headers: { Authorization: 'Bearer ' + LINE_TOKEN },
      payload: {
        message: '\n【牛樟緣】試喝包申請\n時間：' + ts
               + '\n姓名：' + name
               + '\n電話：' + phone
               + '\n地址：' + address
      }
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
