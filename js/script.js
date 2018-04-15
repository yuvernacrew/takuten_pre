$(function(){
  const DIR_IMAGE = "img/"

  // 卓
  var group = [
    {
      id: 'modal01',
      name : '卓1',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
    },
    {
      id: 'modal02',
      name : '卓2',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
    },
    {
      id: 'modal03',
      name : '卓3',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
    },
    {
      id: 'modal04',
      name : '卓4',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
    }
  ];


  var animationFlag = false;
  $(window).on('scroll', function() {
   var top = $(window).scrollTop();
   if(top >= 100) {
     if(!animationFlag) {
      animationFlag = true;
      $(".scroll-icon").fadeOut(200);
     }
   }
  })

  // ロゴをランダムに表示する
  var numArray = [];
  for(var i = 0 ; i < group.length ; i++){
    numArray.push(i);
  }

  var a = numArray.length;
  while (a) {
    var j = Math.floor( Math.random() * a );
    var t = numArray[--a];
    numArray[a] = numArray[j];
    numArray[j] = t;
  };
  console.log(numArray);

  var num, imgUrl, id, name;
  for(var i = 0 ; i < group.length ; i++){
    num = numArray[i];
    imgUrl = group[num].imgUrl;
    id = group[num].id;
    name = group[num].name;


    $('.logo-container').append(`
      <div class="column is-one-fifth-desktop is-half-mobile is-multiline">
      <a data-remodal-target="${id}"><img class='remodal-btn' id='${num}' src='${imgUrl}' alt="${name}のロゴ"/></a>
      </div>`
    );
  }
});
