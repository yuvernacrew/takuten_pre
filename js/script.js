$(function(){
  const DIR_IMAGE = "img/"

  // 卓
  var group = [
    {
      id: 'ririri',
      name : 'リリリ',
      imgUrl: `${DIR_IMAGE}/rerere.png`,
    },
    {
      id: 'lqqp',
      name : 'LQQP',
      imgUrl: `${DIR_IMAGE}/LQQP.png`,
    },
    {
      id: 'cetrois',
      name : 'CETROIS',
      imgUrl: `${DIR_IMAGE}/cetrois.png`,
    },
    {
      id: 'asso',
      name : 'asso',
      imgUrl: `${DIR_IMAGE}/asso.png`,
    },
    {
      id: 'dotus',
      name : 'dotus',
      imgUrl: `${DIR_IMAGE}/dotus.png`,
    },
    {
      id: 'ideal',
      name : 'ideal',
      imgUrl: `${DIR_IMAGE}/ideal.png`,
    },
    {
      id: 'mico',
      name : 'mico',
      imgUrl: `${DIR_IMAGE}/mico.png`,
    },
    {
      id: 'paplica',
      name : 'paplica',
      imgUrl: `${DIR_IMAGE}/paplica.png`,
    },
    {
      id: 'ZAxis',
      name : 'ZAxis',
      imgUrl: `${DIR_IMAGE}/ZAxis.png`,
    },
    {
      id: 'Charamel',
      name : 'Charamel',
      imgUrl: `${DIR_IMAGE}/Charamel.png`,
    },
    {
      id: 'Ex',
      name : 'Ex',
      imgUrl: `${DIR_IMAGE}/Ex.png`,
    },
    {
      id: 'ME',
      name : 'ME',
      imgUrl: `${DIR_IMAGE}/ME.png`,
    },
    {
      id: 'thad',
      name : 'thad',
      imgUrl: `${DIR_IMAGE}/thad.png`,
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
