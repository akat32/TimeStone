function back(){
  history.back();
}
window.onload = ()=>{
  var friendName = new Vue({
    el: '.name',
    data: {
      name : "루다"
    }
  })
  var day = new Vue({
    el: ".lastDay",
    data:{
      day : "2018 / 07 / 03 / 화요일"
    }
  })
}
