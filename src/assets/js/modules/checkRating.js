function checkRating(ratingContainerSelector, starSelecot, currentRatingSelector, checkedClass) {
    const ratingContainer = document.querySelectorAll(ratingContainerSelector);

    ratingContainer.forEach(item => {
        const stars = item.querySelectorAll(starSelecot),
              currentRating = parseInt(item.querySelector(currentRatingSelector).innerHTML);

        stars.forEach(item => {
            item.classList.remove(checkedClass);
        });

        if(currentRating == 1) {
            for(let i = 0; i <= stars.length; i++){
                stars[i].classList.add(checkedClass);
                if(i === 0) {
                    break;
                }
            }
        } else if(currentRating == 2) {
            for(let i = 0; i <= stars.length; i++){
                stars[i].classList.add(checkedClass);
                if(i === 1) {
                    break;
                }
            }
        } else if(currentRating == 3) {
            for(let i = 0; i <= stars.length; i++){
                stars[i].classList.add(checkedClass);
                if(i === 2) {
                    break;
                }
            }
        } else if(currentRating == 4) {
            for(let i = 0; i <= stars.length; i++){
                stars[i].classList.add(checkedClass);
                if(i === 3) {
                    break;
                }
            }
        }else if(currentRating == 5) {
            for(let i = 0; i <= stars.length; i++){
                stars[i].classList.add('star_icon--checked');
                if(i === 4) {
                    break;
                }
            }
        }
    });
}

export default checkRating;