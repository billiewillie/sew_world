import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animate = () => {
  ScrollTrigger.matchMedia({
    "(min-width: 1280px)": function() {

      let tlGallery = gsap.timeline({
        scrollTrigger: {
          trigger: '.gallery',
          scrub: true,
          toggleActions: "play none none none"
        }
      })

      let tlCourses = gsap.timeline({
        scrollTrigger: {
          trigger: '.courses',
          scrub: true,
          toggleActions: "play none none none"
        }
      })

      let tlPicture = gsap.timeline({
        scrollTrigger: {
          trigger: '.pic_bounded',
          scrub: true,
          toggleActions: "play none none none"
        }
      })

      let tlArticles = gsap.timeline({
        scrollTrigger: {
          trigger: '.content',
          scrub: true,
          toggleActions: "play none none none"
        }
      })

      tlGallery.fromTo(".gallery-item__middle", {
        y: 80
      }, {
        y: -80
      })

      tlCourses.fromTo(".course_animated", {
        y: 40
      }, {
        y: -40
      })
      
      tlPicture.to(".pic_bounded", {
        y: 100
      })

      tlArticles.fromTo(".articles-list", {
        y: 20
      }, {
        y: -20
      })

      // gsap.to('.promo-pic_left-side', {
      //   x: -100,
      //   alpha: 0
      // })

      // gsap.from('.promo-pic_left-side', {
      //   x: -100,
      //   alpha: 0,
      //   duration: 3,
      // })
    }
  })
}

export default animate;