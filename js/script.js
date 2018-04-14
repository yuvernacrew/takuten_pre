$(function(){
  const DIR_IMAGE = "img/"

  // 卓
  var group = [
    {
      name : 'paplica',
      img: `${DIR_IMAGE}/taku.png`,
      slide: "//www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "//www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `Hello,world`
    },
    {
      name : 'paplica',
      img: `${DIR_IMAGE}/ceese`,
      slide: "//www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "//www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `Hello,world`
    },
    {
      name : 'paplica',
      img: `${DIR_IMAGE}/ceese`,
      slide: "//www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "//www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `Hello,world`
    },
    {
      name : 'paplica',
      img: `${DIR_IMAGE}/ceese`,
      slide: "//www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "//www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `Hello,world`
    },
    {
      name : 'paplica',
      img: `${DIR_IMAGE}/ceese`,
      slide: "//www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "//www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `Hello,world`
    },
        {
      name : 'paplica',
      img: `${DIR_IMAGE}/ceese`,
      slide: "//www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "//www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `Hello,world`
    },
    {
      name : 'paplica',
      img: `${DIR_IMAGE}/ceese`,
      slide: "//www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "//www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `Hello,world`
    },
    {
      name : 'paplica',
      img: `${DIR_IMAGE}/ceese`,
      slide: "//www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "//www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `Hello,world`
    },
    {
      name : 'paplica',
      img: `${DIR_IMAGE}/ceese`,
      slide: "//www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "//www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `Hello,world`
    },
    {
      name : 'paplica',
      img: `${DIR_IMAGE}/ceese`,
      slide: "//www.slideshare.net/slideshow/embed_code/key/rhIYkBYQFRWEKm",
      url: "//www.slideshare.net/ItoYuki2/2017-75427213",
      disc : `Hello,world`
    }
  ]


   //モーダルの中身
   $('.pc-popcorn-btn').click(function(){
     $('.remodal').children("h3, img, p, span").remove();

     var name = part[$(this).attr('id')].partname;
     var title = part[$(this).attr('id')].title;
     var text = part[$(this).attr('id')].text;
     var leader = part[$(this).attr('id')].leader;

     $('.remodal').append(
       `<h3 class='modal-heading'>〜${title}〜</h3>
       <p class='modal-text'>${text}</p>
       <img class='modal-img' src='img/photo/photo-${name}.png'/>
       <span class='modal-span'>${leader}</span>`

     )
   });


  $('.popcorn-btn').click(function(){
    var name = part[$(this).attr('id')].partname;
    var text = part[$(this).attr('id')].text;

    $('.bg-job').css('background-image','url("./img/icon/icon-' + name + '.png")')

    $('.text-container p').html(text);
  });
});
