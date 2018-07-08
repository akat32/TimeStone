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
  var chat = new Vue({
    el: "#log",
    data: {
      items: [
        {img : "../img/1.jpg", name : "루다", index : "안녕", time : "오전 4:34"},
        {img : "../img/1.jpg", name : "루다", index : "몰라", time : "오전 4:34"},
        {img : "../img/1.jpg", name : "루다", index : "안녕", time : "오전 4:34"},
        {img : "../img/1.jpg", name : "루다", index : "몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라몰라", time : "오전 4:34"}
      ]
    }
  })
}
