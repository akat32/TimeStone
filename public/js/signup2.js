function next(){
  var name = $('#inputName').val()
  var phone = $('#inputPhone').val()
  var regExp = /^\d{3}\d{3,4}\d{4}$/;
  console.log(name)
  if(name === "" || phone === "") return alert('전부 입력해주세요!')
  if(name.length < 2 || name.length > 8) return alert('이름이 짧거나 깁니다!')
  if(!regExp.test(phone)) return alert('01000000000 와 같이 입력해주세요!')
  else location.href = "/signup3"
}


function back(){
  history.back()
}
