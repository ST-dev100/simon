document.getElementById('menuIcon').children[0].addEventListener('click',()=>{
    const list = document.getElementById('menuIcon').children[1];
    list.classList.toggle('hide');

    if(list.classList[0]!=='hide')
    {
        list.classList.toggle('showtheul')
    }
   
    // alert(list)
})

function send()
{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "simalike245@gmail.com",
        Password : "0D41C83EAA003E85A22BC3DD4AC5A4545E1B",
        To : 'simontamene.dev@gmail.com',
        From : "simalike245@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
window.addEventListener('scroll',()=>{
    console.log(document.documentElement.scrollTop)
    console.log(document.documentElement.scrollTop)


})

document.getElementById('proInfo').addEventListener('click',()=>{
    document.getElementById('main2').scrollIntoView()
})

document.getElementById('aboutInfo').addEventListener('click',()=>{
    document.getElementById('main3').scrollIntoView()
})
document.getElementById('skillInfo').addEventListener('click',()=>{
    document.getElementById('main4').scrollIntoView()
})
document.getElementById('contInfo').addEventListener('click',()=>{
    document.getElementById('main5').scrollIntoView()
})

// small device

document.getElementById('proInfosm').addEventListener('click',()=>{
    document.getElementById('main2').scrollIntoView()
})

document.getElementById('aboutInfosm').addEventListener('click',()=>{
    document.getElementById('main3').scrollIntoView()
})
document.getElementById('skillInfosm').addEventListener('click',()=>{
    document.getElementById('main4').scrollIntoView()
})
document.getElementById('contInfosm').addEventListener('click',()=>{
    document.getElementById('main5').scrollIntoView()
})
//  document.body.addEventListener('scroll',(e)=>{
//     console.log(document.body.screenTop)
//  })