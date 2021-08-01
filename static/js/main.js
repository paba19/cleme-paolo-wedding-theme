$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar.fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > 2 * $nav.height());
  });
});

function formInvalid(field, message, alertid, okid, wrongid) {
  field.classList.add("is-invalid");
  parentElement = field.parentNode;
  if (document.getElementById(okid)) {
    document.getElementById(okid).remove();
  }
  if (! parentElement.contains(document.getElementById(alertid))) {
    alertMessage = document.createElement("small");
    alertMessage.setAttribute("id", alertid);
    alertMessage.setAttribute("class", "form-text text-danger form-content");
    alertMessage.textContent = message;
    parentElement.append(alertMessage);
  }
  if (! parentElement.contains(document.getElementById(wrongid))) {
    wrongmark = document.createElement("i");
    wrongmark.setAttribute("id", wrongid);
    wrongmark.setAttribute("class", "fa fa-remove");
    wrongmark.setAttribute("style", "color: rgb(204,0,0)");
    parentElement.childNodes[1].appendChild(wrongmark);
  }
  document.getElementById("rsvp-button").disabled = true;
}


function formIsvalid(field, alertid, okid, wrongid) {
  field.classList.remove("is-invalid");
  if (document.getElementById(alertid)) {
    document.getElementById(alertid).remove();
  }
  if (document.getElementById(wrongid)) {
    document.getElementById(wrongid).remove();
  }
  parentElement = field.parentNode;
  if (! parentElement.contains(document.getElementById(okid))) {
    okcheck = document.createElement("i");
    okcheck.setAttribute("id", okid);
    okcheck.setAttribute("class", "fa fa-check");
    okcheck.setAttribute("style", "color: rgb(66,255,0)");
    parentElement.childNodes[1].appendChild(okcheck);
  }
  document.getElementById("rsvp-button").disabled = false;
}

function isValidName(text) {
  if (text.length <= 2) {
    return false;
  }
  return true;
}

function isValidMessage(text) {
  if (text.length <= 4) {
    return false;
  }
  return true;
}

function IsValidEmail(email) {
  if (email.length <= 2) {
      return false;
  }

  if (email.indexOf("@") == -1) {
      return false;
  }

  var parts = email.split("@");
  var dot = parts[1].indexOf(".");
  var len = parts[1].length;
  var dotSplits = parts[1].split(".");
  var dotCount = dotSplits.length - 1;

  if (dot == -1 || dot < 2 || dotCount > 2) {
      return false;
  }

  for (var i = 0; i < dotSplits.length; i++) {
      if (dotSplits[i].length == 0) {
          return false;
      }
  }

  return true;
};

function IsValidPhone(number) {
  if (number.length <= 9) {
      return false;
  }
 
  const regex = new RegExp('\\\+?[0-9]+');
 
  console.log(regex.test(number))
  if (! regex.test(number) ) {
      return false;
  }

  return true;
};


function blurValidation(event) {
  switch (event.target["name"]) {
    case "name":
      if (! isValidName(event.target.value)) {
        formInvalid(event.target, "{{ T 'nameAleert' }}", "NameAlert", "NameOK", "NameWrong");
        return false;
      } else {
        formIsvalid(event.target, "NameAlert", "NameOK", "NameWrong");
      }
      break;
    case "email":
      if (! IsValidEmail(event.target.value) && ! IsValidPhone(event.target.value)) {
        formInvalid(event.target, "{{ T 'contactAlert' }}", "EmailAlert", "EmailOK", "EmailWrong");
        return false;
      } else {
        formIsvalid(event.target, "EmailAlert", "EmailOK", "EmailWrong");
      }
      break;
    case "message":
      if (! isValidMessage(event.target.value)) {
        formInvalid(event.target, "{{ T 'messageAlert' }}", "MessageAlert", "MessageOK", "MessageWrong");
        return false;
      } else {
        formIsvalid(event.target, "MessageAlert", "MessageOK", "MessageWrong");
      }
      break;
  }  
}
