$(function(){
  const DIR_IMAGE = "img/"

  // 卓
  var group = [
    {
      name : '卓1',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓1です</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓2',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓2です</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓3',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓3ですこんにちは</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓4',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓4ですこんにちは</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓5',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓5ですこんにちは</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓6',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓6ですこんにちは</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓7',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓7ですこんにち</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓9',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓8ですこんにちは</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓9',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓9ですこんにち</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓10',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓10ですこんにち</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓11',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓11ですこんに</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓12',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓11ですこんに</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    },
    {
      name : '卓13',
      imgUrl: `${DIR_IMAGE}/taku_logo.png`,
      slide: "https://www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      disc : `卓11ですこん</br>
      こんにちは<b>こんにちは</b>
      こんにちはこんにちは`
    }
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
    $('.logo-container').append(`
      <div class="column is-one-fifth-desktop is-half-mobile is-multiline">
      <img class='remodal-btn' id='${num}' src='${imgUrl}'/>
      </div>`
    );
  }

   //モーダルの中身

  var $logo = $(".group-logo-container img");
  var $disc = $(".group-discription");
  var $slide = $(".group-slide iframe");
  var name, img, slide, disc;

  $('.remodal-btn').on("click", function(){
    name = group[$(this).attr('id')].name;
    img = group[$(this).attr('id')].imgUrl;
    slide = group[$(this).attr('id')].slide;
    disc = group[$(this).attr('id')].disc;

    $slide.attr({src:`${slide}`});
    $logo.attr({src:`${img}`,alt:`${name}のロゴ`});
    $disc.html(`${disc}`);

    setTimeout(function(){
      $('[data-remodal-id=modal]').remodal().open();
    },600);
  });
});
