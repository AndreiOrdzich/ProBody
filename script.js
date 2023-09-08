


const wrapper = document.querySelector('.blog');
const button1 = document.querySelector('.blog-button-dark');
const blogNewsVisible = document.querySelectorAll ('.blog-news1-wrapper-visible')
const blogNews1Wrapper2 = document.querySelectorAll ('.blog-news1-wrapper2')


function toggleBlog() {
   wrapper.classList.toggle('blog-big');
   blogNewsVisible.forEach((Element) => Element.classList.toggle('blog-news1-wrapper-visible'));
   button1.classList.toggle('button-visible');
if (button1.textContent == 'ПОСМОТРЕТЬ ВСЁ') {
    button1.textContent = 'СКРЫТЬ';
}   else{
    button1.textContent = 'ПОСМОТРЕТЬ ВСЁ';
}



   

}

button1.addEventListener('click', toggleBlog);

