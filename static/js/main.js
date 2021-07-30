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
        formInvalid(event.target, "Name cannot be empty, please insert your name!", "NameAlert", "NameOK", "NameWrong");
        return false;
      } else {
        formIsvalid(event.target, "NameAlert", "NameOK", "NameWrong");
      }
      break;
    case "email":
      if (! IsValidEmail(event.target.value) && ! IsValidPhone(event.target.value)) {
        formInvalid(event.target, "Insert a valid email or phone number!", "EmailAlert", "EmailOK", "EmailWrong");
        return false;
      } else {
        formIsvalid(event.target, "EmailAlert", "EmailOK", "EmailWrong");
      }
      break;
    case "message":
      if (! isValidMessage(event.target.value)) {
        formInvalid(event.target, "Ok la sintesi, ma cosí é un po' troppo!", "MessageAlert", "MessageOK", "MessageWrong");
        return false;
      } else {
        formIsvalid(event.target, "MessageAlert", "MessageOK", "MessageWrong");
      }
      break;
  }

  
  
}

// var d = new Date("10/09/2021 10:30");

//     // $year = $('#countdown_dashboard').data('year');
//     // $month = $('#countdown_dashboard').data('month');
//     // $day = $('#countdown_dashboard').data('day');
//     $year = '2021';
//     $month = '10';
//     $day = '09';
//     $hour = '10';
//     $min = '30';
//     $('#clock').countDown({
//         targetDate: {
//             'day': $day,
//             'month': $month,
//             'year': $year,
//             'hour': $hour,
//             'min': $min,
//             'sec': 59,
//         },
//         omitWeeks: true
//     });

// function slideDownCountDown(timescope, id, date, duration) {
//   var divid = '#' + id;
//   // List of formatters: http://hilios.github.io/jQuery.countdown/documentation.html#formatter
//   switch (timescope) {
//     case "seconds": 
//       var strfstring = "%S";
//       break;
//     case "minutes": 
//       var strfstring = "%M";
//       break;
//     case "hours": 
//      var strfstring = "%H";
//       break;
//     case "days": 
//       var strfstring = "%D";
//       break;
//   }

//   $(divid).countdown(date, function(event) {
//     if ($(divid + '-top').html() != event.strftime(strfstring) + '')  {
//       $(divid + '-top').css({'display': 'none'});
//       $(divid + '-top').html(event.strftime(strfstring)).slideDown(duration);
//       $(this).animate({'height': ''}, duration, function() {
//         $(this).html($(divid + '-top').html());
//         //$(divid + '-top').html(event.strftime('%S')-1);
//         $(this).css({ 'height': '', 'display': 'block'}); 
//         $(divid + '-top').hide().slideUp(10);
//       });
//     }
//   });
// }

// slideDownCountDown('seconds', 'seconds', d, 500);

// slideDownCountDown('minutes', 'minutes', d, 800);

// slideDownCountDown('hours', 'hours', d, 800);

// slideDownCountDown('days', 'days', d, 800);

// $('#days').countdown(d, function(event) {
//   $(this).html(event.strftime('%D'));
// });


// $('#days-top').countdown(d, function(event) {
//   $(this).html(event.strftime('%D')-1);
// });

// $('#hours').countdown(d, function(event) {
//   $(this).html(event.strftime('%H'));
// });

// $('#hours-top').countdown(d, function(event) {
//   if ( event.strftime('%H')-1  >= 00 ) {
//     $(this).html(event.strftime('%H')-1);
//   } else {
//     $(this).html('23');
//   }
// });

// $('#minutes').countdown(d, function(event) {
//   $(this).html(event.strftime('%M'));
// });

// $('#minutes-top').countdown(d, function(event) {
//   if ( event.strftime('%M')-01  >= 00 ) {
//     $(this).html(event.strftime('%M')-1);
//   } else {
//     $(this).html('59');
//   }
// });

// // $('#seconds').countdown(d, function(event) {
// //   $(this).html(event.strftime('%S'));
// // });

// $('#seconds').countdown(d, function(event) {
//   $('#seconds-top').css({'display': 'none'});
// 	$('#seconds-top').html(event.strftime('%S')).slideDown(800);
//   $(this).animate({'height': ''}, 600, function() {
//     $(this).html($('#seconds-top').html());
//     //$('#seconds-top').html(event.strftime('%S')-1);
//     $(this).css({ 'height': '', 'display': 'block'}); 
//     $('#seconds-top').hide().slideUp(10);
//   });
// });

// $('#seconds-top').countdown(d, function(event) {
//   if ( event.strftime('%S')-1  >= 00 ) {
//     $(this).html(event.strftime('%S')-1);
//   } else {
//     $(this).html('59');
//   }
// });