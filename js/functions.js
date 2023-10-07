function makeRequests() {
    if (EtabPrefix.length === 8) {
      alert("OK");
    for (var i = 0; i < 500; i++) {
  fetch('https://' + EtabPrefix + '.index-education.net/pronote/', {mode:'no-cors'});
  }
  } else {
    alert("Invalid ID.");
  }
}

function copyText(text, useUnfocused) {
  if (useUnfocused === true) {
    var tempInput = document.createElement("textarea");
    tempInput.id = "temp-input";
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  } else {navigator.clipboard.writeText(text)}
}



  function AutomatedModeGUI() {
    if (EtabPrefix.length === 8) {
      if (!corsActivated) {
        alert("When activating automated mode, you will need to open devtools using the F12 key, enter Console, paste the text that will be copied to clipboard and press enter. You can then let the page run in background.");
        alert("You can stop the script by either closing the Pronote tab or by clicking the Stop automated mode button on this page (which will close the Pronote tab).");
        alert("A new Pronote tab will be opened. Make sure to permanently enable popups to automatically open the window !");
        var textToCopy = userExecutedFunctions["automatedMode"];
        copyText(textToCopy, true);
        PronoteAutoBanWindow = window.open("https://" + EtabPrefix + ".index-education.net/pronote")
      } else {
        function fetchData() {
          interval = setInterval(() => {
            if (stopAutomatedModeTrigger) {
              stopAutomatedModeTrigger = false
              clearInterval(interval)
            } else {
              fetch('https://' + EtabPrefix + '.index-education.net/pronote/', {redirect: 'manual'})
                .then(response => {
                  return response.text();
                })
                .then(data => {
                  if (data.includes('Votre adresse IP est provisoirement suspendue!') || data.includes('Your IP address is temporarily suspended!')) {
                    console.log('Continuing the loop.');
                  } else {
                    console.log('Launching requests. Relaunching the loop.');
                    for (var i = 0; i < 1000; i++) {
                      fetch('https://' + EtabPrefix + '.index-education.net/pronote/', {
                        mode: 'no-cors'
                      });
                    }
                  }
                })
                .catch(error => {
                  console.error('Error:', error);
                });
              }
        }, 30000);
      }
      fetchData();
      }
  } else {
    alert("Invalid ID.");
  }
}

function AutomatedModeNotifyGUI() {
  if (EtabPrefix.length === 8) {
    if ("Notification" in window) {
      if (!corsActivated) {
        alert("When activating automated mode, you will need to open devtools using the F12 key, enter Console, paste the text that will be copied to clipboard and press enter. You can then let the page run in background.");
        alert("You can stop the script by either closing the Pronote tab or by clicking the Stop automated mode button on this page (which will close the Pronote tab).");
        alert("A new Pronote tab will be opened. Make sure to permanently enable popups to automatically open the window !");
        var textToCopy = userExecutedFunctions["automatedModeNotify"];
        copyText(textToCopy, true);
        PronoteAutoBanNotifyWindow = window.open("https://" + EtabPrefix + ".index-education.net/pronote")
      } else {
        Notification.requestPermission();
        function fetchData() {
          interval = setInterval(() => {
            if (stopAutomatedModeTrigger) {
              stopAutomatedModeTrigger = false
              clearInterval(interval)
            } else {
              fetch('https://' + EtabPrefix + '.index-education.net/pronote/', {
                  redirect: 'manual'
                })
                .then(response => {
                  return response.text();
                })
                .then(data => {
                  if (data.includes('Votre adresse IP est provisoirement suspendue!') || data.includes('Your IP address is temporarily suspended!')) {
                    console.log('Continuing the loop.');
                  } else {
                    console.log('Launching requests. Relaunching the loop.');
                    PronoteUnbannedNotify();
                    for (var i = 0; i < 1000; i++) {
                      fetch('https://' + EtabPrefix + '.index-education.net/pronote/', {
                        mode: 'no-cors'
                      });
                    }
                  }
                })
                .catch(error => {
                  console.error('Error:', error);
                });
            }
          }, 30000);
        }

        function PronoteUnbannedNotify() {
          if ("Notification" in window) {
            Notification.requestPermission()
              .then(function(permission) {
                if (permission === "granted") {
                  var notification = new Notification("Your IP is unbanned from Pronote", {
                    body: "IP banned again",
                  });
                  notification.onclick = function() {};
                }
              })
          .catch(function(error) {
            console.error("Error while requesting permission:", error);
          });
          } else {
            console.log("Notifications not supported in this browser.");
          }
        }
        fetchData();
      }
    } else {
      alert("Notifications not supported in this browser.");
    }
  } else {
    alert("Invalid ID.");
  }
  }

  function StopAutomatedMode() {
    if(PronoteAutoBanWindow) {
      PronoteAutoBanWindow.close();
      PronoteAutoBanNotifyWindow.close();
    } else {
      stopAutomatedModeTrigger = true
    }
  }

  function NotifyUnban() {
    if (EtabPrefix.length === 8) {
      if ("Notification" in window) {
        if (corsActivated === false) {
          alert("When using notifications, you will need to open devtools using the F12 key, enter Console, paste the text that will be copied to clipboard and press enter. You can then let the page run in background to listen for unbans.");
          alert("Please note that you will need to enable notifications in Pronote site settings first.");
          alert("A new Pronote tab will be opened. Make sure to permanently enable popups to automatically open the window !");
          var textToCopy = userExecutedFunctions["unbanNotify"];
          copyText(textToCopy, true);
          PronoteNotifyWindow = window.open("https://" + EtabPrefix + ".index-education.net/pronote");
        } else {
          function fetchData() {
            timeout = setTimeout(() => {
              if (stopAutomatedModeTrigger) {
                stopAutomatedModeTrigger = false
                return("exit")
              }
              fetch('https://' + EtabPrefix + '.index-education.net/pronote/', {redirect: 'manual'})
                .then(response => {
                  return response.text();
                })
                .then(data => {
                  if (data.includes('Votre adresse IP est provisoirement suspendue!') || data.includes('Your IP address is temporarily suspended!')) {
                    console.log('Banned.');
                    fetchData();
                  } else {
                    console.log('Unbanned.');
                    PronoteUnbannedNotify();
                  }
                })
                .catch(error => {
                  console.error('Error:', error);
                });
            }, 30000);
          }
        
          if ("Notification" in window) {
            Notification.requestPermission()
          }
            function PronoteUnbannedNotify() {
              if ("Notification" in window) {
                Notification.requestPermission()
                  .then(function (permission) {
                      if (permission === "granted") {
                        var notification = new Notification("Your IP is unbanned from Pronote", {
                          body: "It is",
                        });
                        notification.onclick = function () {
                      };
                    }
                  })
                  .catch(function (error) {
                    console.error("Error while requesting permission:", error);
                  });
              } else {
                console.log("Notifications not supported in this browser.");
              }
            }
          
          fetchData();
        }
      } else {
        alert("Notifications not supported in this browser.");
      }
    } else {
      alert("Invalid ID.");
    }
  }

  function openPronote() {
    PronoteWindow = window.open("https://" + EtabPrefix + ".index-education.net/pronote");
  };

  function setPrefix() {
    if (elid("EtabPrefixInput").value.length === 8) {
    EtabPrefix = elid("EtabPrefixInput").value;
    alert("This domain will be used : https://" + EtabPrefix + ".index-education.net");
    document.cookie = "EtabPrefix=" + EtabPrefix + "; expires=Thu, 1 Jan 2025 00:00:00 UTC; path=/";
  } else {
      alert("Invalid ID.");
    }
  }

  function corsToggle() {
    const corsImage = elid("cors-support-toggle");
    if (corsActivated === false) {
      fetch("https://" + EtabPrefix + ".index-education.net/pronote", {redirect: 'manual'})
        .then (response => {
          corsActivated = true;
          corsImage.src = "imgs/cors-enabled.png"
        })
        .catch(e => {
          corsActivated = false;
          corsImage.src = "imgs/cors-disabled.png"
          alert("Unable to enable CORS support. Make sure you have internet connection and something to enable CORS (for example an extension).");
        });
      } else {
        corsActivated = false
        corsImage.src = "imgs/cors-disabled.png"
      }
    console.log(corsActivated)
    document.cookie = "corsActivated=" + corsActivated + "; expires=Thu, 1 Jan 2025 00:00:00 UTC; path=/";
  }