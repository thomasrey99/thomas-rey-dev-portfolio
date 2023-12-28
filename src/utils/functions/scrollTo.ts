export const scrollToSection=(section:string)=>{
    const sectionScroll = document.getElementById(section);
        if (sectionScroll) {
          window.scrollTo({
            top: sectionScroll.offsetTop,
            behavior: 'smooth'
          });
        }
}