window.addEventListener("DOMContentLoaded", function() {
  const EtabPrefixInput = elid("etab-prefix-input");
  if (EtabPrefix !== "") {EtabPrefixInput.value = EtabPrefix};
  if (urlParams.has('id') === true && urlParams.get('id').length === 8) {
    EtabPrefixInput.value = urlParams.get('id')} else {
    if (urlParams.has('id') === true && urlParams.get('id').length !== 8) {console.warn("Invalid ID")};
    if (EtabPrefixInput && EtabPrefix === "") {
      EtabPrefixInput.value = "e212074g";
      EtabPrefix = EtabPrefixInput.value;
    }
  }
});

window.addEventListener("DOMContentLoaded", function() {
  var UserAgentDisplay = elid("user-agent-display");
  if (UserAgentDisplay) {
    UserAgentDisplay.value = navigator.userAgent;
  };
});

window.addEventListener("DOMContentLoaded", function() {
  // Test for Chrome
  var userAgent = navigator.userAgent;
  if (userAgent.indexOf("Chrome") > -1) {
    console.log("ok");
    elid("chrome-user-agent-alert").style.display =""
  } else {
    // The browser is not Chrome
    alert("Warning : Browser does not look like it's Chrome. This website was designed for Chrome, so features may work differently or not work. If you are changing your user agent this alert means it's working.");
}
if (userAgent.indexOf("Windows") > -1 ) {
    console.log("ok");
  } else {
    // The browser is not Chrome
    alert("Warning : Device does not look like it's Windows. This website was made and tested on Windows, so features may work differently or not work. If you are changing your user agent this alert means it's working.");
}
})

window.addEventListener("DOMContentLoaded", function() {
  if (corsActivated === true) {
    const corsIcon = elid("cors-support-toggle");
    corsIcon.src = "imgs/cors-enabled.png";
  }
})
corsActivatedCookie = getCookie("corsActivated")
if (corsActivatedCookie = 'false') {corsActivated = false} else {corsActivated = true};
