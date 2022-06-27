document.querySelector('.nav1').onclick = function(e) {
    e.preventDefault()
    window.location.href = "./project.html"
}
document.querySelector('.nav2').onclick = function(e) {
    e.preventDefault()
    window.location.href = "./shop.html"
}
document.querySelector('.nav3').onclick = function(e) {
    e.preventDefault()
    window.location.href = "./basket.html"
}
document.querySelector('.nav4').onclick = function(e) {
    e.preventDefault()
    window.location.href = "./contact.html"
}
document.querySelector('.nav5').onclick = function(e) {
    e.preventDefault()
    window.location.href = "./team.html"
}


var elements = [
    {
        image:"catfeed1.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },{
        image:"petfood-yeni.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },
    {
        image:"petfood2.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },
    {
        image:"catfeed3.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },
    {
        image:"catfeed2.png",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },
    {
        image:"petfood3.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },
    {
        image:"catfeed4.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },
    {
        image:"petfood5.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },    {
        image:"petfood4.png",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },    {
        image:"catfeed5.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },    {
        image:"petfood6.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },
    {
        image:"petfood7.png",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },{
        image:"catfood9.png",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },{
        image:"catfood-yeni.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },{
        image:"petfood8.png",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },
    {
        image:"petfood9.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },
    {
        image:"petfood10.png",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"feed"
    },
    {
        image:"acsessuar1.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    },
    {
        image:"acsessuar2.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar3.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar4.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar5.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar6.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar7.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar8.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar9.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar10.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar11.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar12.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        attr:"object"
    }, {
        image:"acsessuar13.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar14.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar15.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar16.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar17.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar18.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar19.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        attr:"object"
    }, {
        image:"acsessuar20.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar21.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar22.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }, {
        image:"acsessuar23.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    },
    {
        image:"acsessuar24.jpg",
        text:"Acana 1kq pişik yeməyi",
        score:"30 AZN",
        type:"object"
    }
]
for (let i = 0; i < elements.length; i++) {
    document.querySelector(".products").innerHTML+=
    `<div class="product-card" cat="${elements[i].type}">
    <img src=${elements[i].image}>
    <h6>${elements[i].text}</h6>
    <span>${elements[i].score}</span>
    <i class="add-card fa-solid fa-plus" say="${i}"></i>
    </div>
    
    `
}


// sepetin ici
for (let i = 0; i < elements.length; i++) {
    document.querySelector(".basket-bar").innerHTML+=
    `<div class="basket-little-bar" saysepet="${i}">
      <img src=${elements[i].image}>
      <p>${elements[i].text}</p>
    
      <div class="numbers" saysepet="${i}">
        <i class="fa-solid fa-minus prod-minus"></i>
        <span artim ="${i}">0</span>
        <i class="fa-solid fa-plus prod-plus"></i>
      </div>

    </div>
    `
    
}
var say=0
var sepetsay = 0
$(".add-card").click(function () { 
    sepetsay = $(this).attr("say");
    $(`[saysepet="${sepetsay}"]`).css("display", "flex");
    let a = Number($(`[artim="${sepetsay}"]`).text())
    $(`[artim="${sepetsay}"]`).text(a+1)

    say++
    $(".basket-shop").text(`Səbətiniz (${say})`);
});

$(".prod-plus").click(function (e) { 
    let a = Number($(this).parent().children().eq(1).text())
    $(this).parent().children().eq(1).text(a+1)
});

$(".prod-minus").click(function (e) { 
    let a = Number($(this).parent().children().eq(1).text())
    if (a==1) {
        $(this).parents(".basket-little-bar").css("display", "none")
    }
    $(this).parent().children().eq(1).text(a-1)
});




var menu = document.querySelectorAll(".product-filter-bar .btns")
var b = ""
var card = document.querySelectorAll(".product-card")


menu.forEach(x => {
    x.addEventListener("click", function () {
        b=x.getAttribute("id")
        console.log(b)

        card.forEach(y => {
            if (y.getAttribute("cat")==b || b=="all") {
                y.style.display = "block"
            }
            else{
                y.style.display = "none"
            }
        });
    })
});
document.querySelector(".basket-shop").onclick = function (e) {
    e.preventDefault()
    document.querySelector(".sebet").style.display= "flex"

    document.querySelector(".shop-area").style.display = "none"

}   