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
  if (urlParams.has('bypass-password') === true && urlParams.get('bypass-password') === 'mobile') {elid("hide-content").remove()};
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
    elid("chrome-user-agent-alert").style.display ="";
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

// Etab prefix input enter press
window.addEventListener("DOMContentLoaded", function() {
  const input = elid("etab-prefix-input");
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      elid("set-etab-prefix").click();
    }
  });
})

// Password box input enter press
window.addEventListener("DOMContentLoaded", function() {
  const passwordInput = elid("password-input");
  passwordInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      passwordInput.value = null;
      passwordInput.style.border = "red";
      passwordInput.style = passwordInput.style.cssText + " border-width: 2px; border-style : solid;";
      passwordInput.blur();
      alert("Wrong password");
    }
  });
  passwordInput.addEventListener("focus", () => {
    passwordInput.style = "position: absolute; left: 50%; bottom: 50%; transform: translate(-50%, -50%); border-width: 2px; border-style: solid; border-radius: 1px; width: 20%; height: 5%; text-align: center;";
  });
})

// Here else the getCookie function isn't loaded yet
corsActivatedCookie = getCookie("corsActivated");
if (corsActivatedCookie = 'false') {corsActivated = false} else {corsActivated = true};
