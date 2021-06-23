
document.querySelector('.delete-article').addEventListener('click',(e)=>{
    e.preventDefault();
    var x=document.querySelector('.delete-article').getAttribute("data-articles");
    console.log(x);
      $.ajax({
          url: `/articles/${x}`,
          type:'DELETE',
          success: function (result) {
              console.log('successful');
              window.location.href='/'
          },
          error:(err)=>{
              console.log(err);
          }
      });
})