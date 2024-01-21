function getMail() {
  var label = GmailApp.getUserLabelByName("Candidature")
  var threads = label.getThreads(); 
  for (var i = threads.length - 1; i >= 0 ; i--){
    var messages = threads[i].getMessages(); 
    for (var j = 0; j < messages.length; j++){  
      var message = messages[j];
      messageScraping(message);
    }
    threads[i].removeLabel(label)
    threads[i].addLabel(GmailApp.getUserLabelByName("Candidature-traitée"))
  }
}

function messageScraping(message){
  var date = message.getDate(); 
  var entreprise = message.getFrom();
  var jobs = message.getSubject();

  var text = message.getPlainBody();

  var sheetId = "your-google-sheet-id";
  var sheet = SpreadsheetApp.openById(sheetId);
  sheet.appendRow([date,entreprise,jobs, text])
}
