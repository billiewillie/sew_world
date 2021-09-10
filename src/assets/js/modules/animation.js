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
    }
  })
}

export default animate;