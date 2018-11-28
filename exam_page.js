const scrollTop = document.querySelector('#scroll-top');
const connect = document.querySelector('.connect');
const mobileBtn = document.querySelector('.dropdown');
const listDown = document.querySelector('#whole_page_list_dropdown');
const closebtn = document.querySelector('.closebtn');


scrollTop.addEventListener('click', function() {
  window.scroll({top: 0, left: 0, behaviour: 'smooth'});
});

// window.addEventListener('scroll', function () {
//   console.log(window.scrollY)
//   if(window.scrollY > 39) {
//     scrollTop.style.display = 'block';
//   } else {
//     scrollTop.style.display = 'none';
//   }
// })

// connect.addEventListener('click', function() {
//   window.scroll({top: 800, left: 0, behaviour: 'smooth'});
//   console.log('ar veikia');
// });

mobileBtn.addEventListener('click', function () {
  console.log(listDown);

  if (listDown.style.height === '0px' || !listDown.style.height) {
      listDown.style.height = '100%'
   } else {
     listDown.style.height = '0px'
  }
});

closebtn.addEventListener('click', function() {

  if (listDown.style.height === '100%' || !listDown.style.height) {
      listDown.style.height = '0px'
   } else {
     listDown.style.height = '100%'
  }

});

// function myFunction() {
//     document.getElementByClassName("dropdown").style.display = 'none';
// }



 mobileBtn.addEventListener('click', function () {
  if (mobileBtn.style.display = 'block') {
    mobileBtn.style.display = 'none'
  } else if (mobileBtn.style.display = 'none') {
    mobileBtn.style.display = 'block'
  } else {
    mobileBtn.style.display = 'block'
  }
  });


  // $("button").click(function() {
  //     $('html,body').animate({
  //         scrollTop: $(".questions_form").offset().top},
  //         'slow');
  // });
