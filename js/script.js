$(function(){
  const DIR_IMAGE = "img/"

  // 卓
  var group = [
    {
      name : '卓1',
      imgUrl: `${DIR_IMAGE}/taku_logo.jpg`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "https://www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `卓1ですこんにちはこんにちは`
    },
    {
      name : '卓2',
      imgUrl: `${DIR_IMAGE}/taku_logo.jpg`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "https://www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `卓2ですこんにちはこんにちは`
    },
    {
      name : '卓3',
      imgUrl: `${DIR_IMAGE}/taku_logo.jpg`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "https://www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `卓3ですこんにちはこんにちは`
    },
  ];

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


  for(var i = 0 ; i < group.length ; i++){
    var num = numArray[i];
    var imgUrl = group[num].imgUrl;
    $('.logo-container').append(`<a href='#modal'><img class='remodal-btn' id='${num}' src='${imgUrl}'/></a>`);
  }

   //モーダルの中身
   $('.remodal-btn').on("click", function(){
     $('.remodal').children(".remodal-contents").remove();

     var name = group[$(this).attr('id')].name;
     var img = group[$(this).attr('id')].imgUrl;
     var slide = group[$(this).attr('id')].slide;
     var url = group[$(this).attr('id')].url;
     var disc = group[$(this).attr('id')].disc;

     $('.remodal').append(
       `<div class="remodal-contents">
          <p>${name}</p>
          <img src="${img}">
          <iframe src="${slide}" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> 
          <p>${disc}</p>
        </div>`
     );

     $('[data-remodal-id=modal]').remodal();
   });
});
