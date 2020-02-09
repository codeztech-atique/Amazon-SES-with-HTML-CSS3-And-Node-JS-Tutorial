function addClass() {
    var email = $('#email').val();
    var name =  $('#name').val();
    var message = $('#message').val();  
    var data = {
       email: email,
       name: name,
       message: message
    };

    $.ajax({
      url: 'http://localhost:3500/user/sendmail',
      type:"post",
      dataType: 'json',
      data: data,
      crossDomain: true, 
      success:function(result){
          console.log("Email Status!");
          console.log(result);
          $('#successmessage').append($("<span>"+result.message+"</span>"));
          document.body.classList.add("sent");
      }
  });
  
}

sendLetter.addEventListener("click", addClass);