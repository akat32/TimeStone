function back(){
  history.back()
}

function next(){
  var name = $('#inputEmail').val()
  var phone = $('#inputPasswd').val()
  if (name === "" || phone === "") alert("전부 입력해 주세요")
  else location.href = "/signup2"
}
