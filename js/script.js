var smoothJumpUp = function() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        window.scrollBy(0,-50);
        setTimeout(smoothJumpUp, 10);
    }
}

window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
      document.getElementById('upbutton').style.display = 'block';
  } else {
      document.getElementById('upbutton').style.display = 'none';
  }
}


function validateForm()
{

    var z = document.forms["myForm"]["num"].value;
    if(!z.match(/\b\d{4}[\/-]\d{2}[\/-]\d{2}\b/)) 
        {
        alert("Дата введена в неверном формате. введите дату в формате: год-месяц-день 2021-12-15")
        } else {
            getDayInfo();
        }
}

function getDayInfo () {
    var mydate = new Date(document.forms["myForm"]["num"].value);
    var date = mydate.getDate();
    var day = mydate.getDay();
    var days = [
        'воскр', 'пон', 'втор', 'сре', 'чет', 'пят',
        'суб'
    ];
    var month = mydate.getMonth();
    var months = [
        'янв', 'фев', 'мар', 'апр', 'май', 'июн',
        'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
    ];
    var weekOfMonth = Math.ceil((date + 6 - day)/7);
    var year = mydate.getFullYear();
    
    alert(days[day] + ', ' + weekOfMonth + ' неделя ' + months[month] + ' , ' + year + ' года');
    };