document.querySelector('.close').style.display = 'none'

document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.menu').style.display='inline'
        document.querySelector('.close').style.display='none'
        // document.querySelector('.infoContainer').style.justify-content="space-between"
    }
    else{
        document.querySelector('.menu').style.display='none'
        setTimeout(()=>{
            document.querySelector('.close').style.display='inline' 
        },350)   
    }
})
