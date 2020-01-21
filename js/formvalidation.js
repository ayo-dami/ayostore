//change tab
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





//Valid Name
function validName() {
  $("#result").text("");
  var a = document.getElementById("fname").value;
    var b = document.getElementById("lname").value; 

  // var FirstName = $("#lname").val();
if (a==null || a=="",b==null || b=="") {
    $("#result").text("* Please enter your Firstname and Lastname correctly");
    $("#result").css("color", "red");
  } else {
    $("#result").text("* Firstname and Lastname were entered correctly ");
    $("#result").css("color", "green");
  }
}
//First Name Last Name
$("#validinput").bind("click", validName);

//Email Address
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
//Valid Email
function validEmail() {
  $("#noticeEmail").text("");
  var email = $("#email").val();
  if (validateEmail(email)) {
    $("#noticeEmail").text("* Email Address: " + email + " is valid");
    $("#noticeEmail").css("color", "green");
  } else {
    $("#noticeEmail").text("* Email Address: " + email + " is not valid try again");
    $("#noticeEmail").css("color", "red");
  }
  return false;
}
//binding
$("#validinput").bind("click", validEmail);


//valid phone Number
function validateNo(phoneNo) {
  var no = /^\s*\(?(020[7,8]{1}\)?[ ]?[1-9]{1}[0-9{2}[ ]?[0-9]{4})|(0[1-8]{1}[0-9]{3}\)?[ ]?[1-9]{1}[0-9]{2}[ ]?[0-9]{3})\s*$/;
  return no.test(phoneNo);
}

//validation phone notice
function validNumber() {
  $("#noticeNo").text("");
  var phoneNo = $("#phoneNo").val();

if (validateNo(phoneNo)) {
    $("#noticeNo").text("* Phone Number enter correctly");
    $("#noticeNo").css("color", "green");
  } else {
    $("#noticeNo").text("* Phone number not entered correctly ");
    $("#noticeNo").css("color", "red");
  }
}
//binding
$("#validinput").bind("click", validNumber);

//Address
function validAddress() {
  $("#addressNo").text("");
  var a = document.getElementById("ad1").value;

  // var FirstName = $("#lname").val();
if (a==null || a=="") {
    $("#addressNo").text("* Please enter your Address information");
    $("#addressNo").css("color", "red");
  } else {
    $("#addressNo").text("* Address was entered correctly");
    $("#addressNo").css("color", "green");
  }
}

//
$("#validinput").bind("click", validAddress);


//postcode
function validatePc(postCode) {
  var pc = /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/;
  return pc.test(postCode);
}

function validPostCode() {
  $("#noticeAddress").text("");
  var postCode = $("#postCode").val();

if (validatePc(postCode)) {
    $("#noticeAddress").text("* Postcode entered correctly");
    $("#noticeAddress").css("color", "green");
  } else {
    $("#noticeAddress").text("* Postcode not entered correctly ");
    $("#noticeAddress").css("color", "red");
  }
  
}

$("#validinput").bind("click", validPostCode);

function validateCard(card) {
 var crd = /[0-9]{13,16}$/;
 return crd.test(card);       
}

function validCard() {
  $("#noticCard").text("");
  var card = $("#card").val();

if (validateCard(card)) {
    $("#noticCard").text("* Card entered correctly");
    $("#noticCard").css("color", "green");
  } else {
    $("#noticCard").text("* Card not entered correctly ");
    $("#noticCard").css("color", "red");
  }
}

$("#validinput").bind("click", validCard);

//captcha
 function Captcha(){
  var alpha = new Array('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', 
    '0','1','2','3','4','5','6','7','8','9');
     var i;
     for (i=0;i<6;i++){
         var a = alpha[Math.floor(Math.random() * alpha.length)];
         var b = alpha[Math.floor(Math.random() * alpha.length)];
         var c = alpha[Math.floor(Math.random() * alpha.length)];
         var d = alpha[Math.floor(Math.random() * alpha.length)];
         var e = alpha[Math.floor(Math.random() * alpha.length)];
         var f = alpha[Math.floor(Math.random() * alpha.length)];
         var g = alpha[Math.floor(Math.random() * alpha.length)];
                      }
         var code = a + ' ' + b + ' ' + ' ' + c + ' ' + d + ' ' + e + ' '+ f + ' ' + g;
         document.getElementById("mainCaptcha").innerHTML = code
         document.getElementById("mainCaptcha").value = code
       }
function ValidCaptcha(){
    $("#noticeCapt").text("");
     var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
     var string2 = removeSpaces(document.getElementById('txtInput').value);
     
     if (string1 == string2){
        $("#noticeCapt").text("* Captcha entered correctly");
        $("#noticeCapt").css("color", "green");
     }else{        
        $("#noticeCapt").text("* Captcha not entered correctly ");
        $("#noticeCapt").css("color", "red");
          }
          
}
function removeSpaces(string){
     return string.split(' ').join('');
}

$("#validinput").bind("click", ValidCaptcha);

//reset
function resetEntry() {
    document.getElementById("orderForm").reset();
}

//defaultab
function defaultab() {
  openTab(event, "Tab1");
  var tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
        tablinks[0].className = "not-active tablinks active";
    }
}
$("#defaultab").bind("click", defaultab);

//first tab confirm
function firstTab() {
  openTab(event, "Tab2");
  var tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
        tablinks[1].className = "not-active tablinks active";
    }
}
$("#firstTab").bind("click", firstTab);


//second tab confirm
function secTab() {
   
  //First and Last name
  var a = document.getElementById("fname").value;
  var b = document.getElementById("lname").value;
  //Email
   var email = $("#email").val();
  //PhoneNo
  var phoneNo = $("#phoneNo").val();
  //Address1
  var c = document.getElementById("ad1").value;
  //postcode
  var postCode = $("#postCode").val();
  //card
  var card = $("#card").val();
  //captcha
  var string1 = removeSpaces(document.getElementById('mainCaptcha').value);
  var string2 = removeSpaces(document.getElementById('txtInput').value);
  
  if(a!=="" && b!=="" && validateEmail(email) && validateNo(phoneNo) && 
      c!=="" && validatePc(postCode) && validateCard(card) && string1 === string2){

  openTab(event, "Tab3");
  displayInput();
  var tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
        tablinks[2].className = "not-active tablinks active";
    }
 
  }
        
}
$("#validinput").bind("click", secTab);
//submit

//Display input
function displayInput() {

  var a = document.getElementById("title").value;
  var b = document.getElementById("fname").value;
  var c = document.getElementById("lname").value;
  var d = document.getElementById("email").value;
  var e = document.getElementById("ad1").value;
  var f = document.getElementById("postCode").value;

  $("#displayName").text(a +" "+ b +" "+ c);
  $("#displayEmail").text(d);
  $("#displayAddress").text(e);
  $("#displayPostCode").text(f);

}


//Submit and Save reciept
var doc = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

$('#cmd').click(function () {
    doc.fromHTML($('#tabprint').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('receipt.pdf');
    });