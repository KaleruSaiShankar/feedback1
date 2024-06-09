// const stars= document.querySelectorAll(".stars i");
// //loop

// stars.forEach((star,index1) => {
//     stars.addEventListener("click",() => {
//         stars.forEach((star,index2) =>{

//             index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
//         });
//     });
// });



const stars = document.querySelectorAll('.stars i');
const ratingText = document.querySelector('.rating-text');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        let rating = index + 1;
        updateRating(rating);
    });
});

function updateRating(rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
    // ratingText.textContent = `You rated ${rating} out of 5 stars`;
}