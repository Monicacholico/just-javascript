

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function obCallback(payload) {
    // console.log(payload[0].isIntersecting);
   if(payload[0].intersectionRatio === 1) {
      button.disabled = false;
      console.log('REMOVING DISABLE')
   };
}

const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
});

ob.observe(terms.lastElementChild);




terms.addEventListener('scroll', (e) => {
    console.log(e.currentTarget.scrollTop);
    console.log(e.currentTarget.scrollHeight);
})