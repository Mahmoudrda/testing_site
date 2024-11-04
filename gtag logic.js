// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-J9Q54BW05S"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-J9Q54BW05S');
// </script>

// navbar logic

document.querySelector('.navbar').addEventListener('click', function(event){
    gtag('event', 'navbar_click',{
        'clicked_text': event.target.innerText})
})

// outbound logic
links= document.querySelectorAll('a')
for (i=0; i<links.length; i++){
    links[i].addEventListener(click, function(event){
        if ((event.target.hostname !== window.location.hostname && !/e-norlaunchpad/.test(event.target.hostname) && !/tel|mailto/.test(event.target.href))){
            gtag('event', 'outbound_click', {
                'link_url': event.target.href})
        }
    })
}