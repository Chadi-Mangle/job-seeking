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

  var sheetId = "your_sheet_id";
  var sheet = SpreadsheetApp.openById(sheetId);

  var data = sheet.getDataRange().getValues();
  
  var entrepriseColumn = 2; 
  var lastRow = sheet.getLastRow();
  var found = false;

  for (var i = 1; i < lastRow; i++) {

    if (data[i][entrepriseColumn - 1] === entreprise) {
      sheet.getActiveSheet().getRange(i+1 , sheet.getLastColumn(), 1, 2).setValues([[date, text]]); 
      found = true;
      break;
    }
  }

  if (!found){
    var cellCandidature = sheet.getActiveSheet().getRange(1, 7)
    var nbCandidature = cellCandidature.getValue()
    
    cellCandidature.setValue(nbCandidature+1)

    sheet.appendRow([date, entreprise, jobs, text]);
  }
}
