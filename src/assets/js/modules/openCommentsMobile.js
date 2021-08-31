function openCommentsMobile() {
    const comment = document.querySelectorAll('[data-comments]'),
          commentsBtn = document.querySelector('.button--comments'),
          commentLinkBox = document.querySelector('.comment_link_container'),
          commentLink = document.querySelector('.comments_link');
  
    if(window.innerWidth < 1200) {
        comment[3].classList.add('hide');
        comment[4].classList.add('hide');

        commentsBtn.addEventListener('click', ()=> {
            comment[3].classList.remove('hide');
            comment[4].classList.remove('hide'); 
            commentLinkBox.classList.add('show');
            commentLink.classList.add('button');
            commentsBtn.classList.add('hide');
        
        });
    } else {
        comment[3].classList.remove('hide');
        comment[4].classList.remove('hide'); 
    }               
}

export default openCommentsMobile; 