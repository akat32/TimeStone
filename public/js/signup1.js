function back(){
  history.back()
}

function next(){
  // var email = $('#inputEmail').val()
  // var exptext = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  // var passwd = $('#inputPasswd').val()
  // var result = exptext.test(email);
  // if (passwd === "" || email === "") return alert("전부 입력해 주세요")
  // if(!result) return alert('이메일 값이 틀렸습니다!')
  // else if (result) location.href = "/signup2"
  location.href = "/signup2"
  return false;
}
