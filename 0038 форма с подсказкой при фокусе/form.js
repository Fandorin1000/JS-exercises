function showHelp(help) { 
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
  return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Ваш адресc e-mail'},
      {'id': 'name', 'help': 'Ваше полное имя'},
      {'id': 'age', 'help': 'Ваш возраст (Вам должно быть больше 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
  }
}

setupHelp();