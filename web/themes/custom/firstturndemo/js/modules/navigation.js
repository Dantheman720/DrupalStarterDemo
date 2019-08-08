
class Navigation{

  constructor(){
    this.addFeatureDivLink = document.querySelectorAll(".featured-content-card");
    this.link = '';
    this.events();
  }

  events(){
    for (const feature of this.addFeatureDivLink){
      let link = feature.getAttribute('data-link');
      feature.addEventListener('click', this.goToPage.bind(link))
    }
  }

  goToPage(e){
    window.location.href = e.currentTarget.getAttribute('data-link');
  }

}

export default Navigation;
