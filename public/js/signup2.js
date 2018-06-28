function next(){
  var name = $('#inputName').val()
  var phone = $('#inputPhone').val()
  if (name === "" || phone === "") alert("전부 입력해 주세요")
  else location.href = "/signup3"
}


function back(){
  history.back()
}
