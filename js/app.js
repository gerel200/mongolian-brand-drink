const scroll = document.querySelector(".animate-scroll");
scroll.innerHTML += scroll.innerHTML;

const header = document.querySelector('#navbar'); 
const headerOffset = header ? header.offsetHeight : 0;

document.querySelectorAll('.animate-scroll .thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const selector = thumb.dataset.target;
    const target = document.querySelector(selector);
    if (!target) return;

    const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});


function initMap() {
            const loc = {lat: 35.74846, lng: 139.56766};

            const map = new google.maps.Map(document.querySelector('.map'), {
                zoom: 14,
                center: loc
            });

            const marker = new google.maps.Marker({
                position: loc,
                map: map
            });
        }
