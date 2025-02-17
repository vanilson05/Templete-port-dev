const menubar = document.querySelector('#menu');
const Navbar = document.querySelector('.navbar');
menubar.onclick=()=>{
    menubar.classList.toggle('bx-x');
    Navbar.classList.toggle('active')
}
const section=document.querySelectorAll('section');
const navlink = document.querySelectorAll('header nav a')
window.onscroll = ()=>{
    section.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if(top>offset && top < offset + height){
            sec.classList.add('start-animation');
            navlink.forEach(links=>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*='+id+']').classList.add('active')
              
            })
        }
    })
    var header = document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY>100)
    menubar.classList.remove('bx-x');
    Navbar.classList.remove('active')
} 

// Adicione isso no final do seu JS
const ball = document.querySelector('.ball'); // Seleciona a bolinha

// Função que move a bolinha
document.addEventListener('mousemove', (e) => {
    // Obtém a posição do mouse, incluindo o scroll da página
    const mouseX = e.clientX;
    const mouseY = e.clientY + window.scrollY; // Adiciona o scrollY para considerar a rolagem

    // Move a bolinha para a posição do mouse
    ball.style.left = `${mouseX}px`;
    ball.style.top = `${mouseY}px`;
});

// Efeitos extras (opcional)
const links = document.querySelectorAll('a'); // Seleciona todos os links

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        ball.style.backgroundColor = '#FF5733'; // Muda a cor da bolinha
    });

    link.addEventListener('mouseout', () => {
        ball.style.backgroundColor = '#050DFC'; // Volta à cor original
    });
});

document.addEventListener('click', () => {
    ball.style.width = '30px';
    ball.style.height = '30px';
    setTimeout(() => {
        ball.style.width = '20px';
        ball.style.height = '20px';
    }, 200); // Volta ao tamanho original após 200ms
});