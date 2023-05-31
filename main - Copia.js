var images =
[   "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2SK4PY4FHBHLDCJ24HED5EJF7U.jpg",
    "https://media.tenor.com/kATwocUwlQAAAAAd/spy-x-family-anya.gif"
,"https://d3ugyf2ht6aenh.cloudfront.net/stores/001/055/923/products/2669091-02ce72551b700debfa16497334121107-640-0.jpg"
, "https://animenew.com.br/wp-content/uploads/2023/03/Spy-x-Family-Yor-Forger-criada-com-Inteligencia-artificial-impressiona-fas.webp"
,"https://pic-bstarstatic.akamaized.net/ugc/8fe0e8b2ae44412c1cb800da180449e3.jpeg@1200w_630h_1e_1c_1f.webp"
]
var names = ["Os forger"," Anya.", "Loid","Yor","obrigado thau"
]

var i = 0;
function update()
{
    i++;
    var nunbersOFFamilyMenberInArray = 5
    if(i >nunbersOFFamilyMenberInArray)                    
{

    i = 0;
}

var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("familyMemberImage").src = updatedImage;
document.getElementById("familyMemberName").innerHTML=updatedName;
}