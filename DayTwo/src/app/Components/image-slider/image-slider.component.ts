import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent {

  public imageUri : string = 'assets/images/1.jpeg';
  private static readonly imageCount : number = 4;
  private static CURRENT_IMAGE : number = 1 ;
  private static intervalId : any ;

  private addExtensionJPEG (imageName:string) :string {
    imageName = imageName + '.jpeg';
    return imageName;
  }

  public next() {

    if( ImageSliderComponent.CURRENT_IMAGE < ImageSliderComponent.imageCount){
      this.imageUri = 'assets/images/';
      ImageSliderComponent.CURRENT_IMAGE = ImageSliderComponent.CURRENT_IMAGE + 1;
      this.imageUri = this.imageUri + `${ImageSliderComponent.CURRENT_IMAGE}`;
      this.imageUri = this.addExtensionJPEG(this.imageUri);
    }
  }

  public prev() {
    if( ImageSliderComponent.CURRENT_IMAGE <= ImageSliderComponent.imageCount && ImageSliderComponent.CURRENT_IMAGE > 1){
      this.imageUri = 'assets/images/';
      ImageSliderComponent.CURRENT_IMAGE = ImageSliderComponent.CURRENT_IMAGE - 1;
      this.imageUri = this.imageUri + `${ImageSliderComponent.CURRENT_IMAGE}`;
      this.imageUri = this.addExtensionJPEG(this.imageUri);
    }
  }
  public slide() {
    let direction = 1; // 1 for forward, -1 for backward
    ImageSliderComponent.intervalId = setInterval(() => {
      if (ImageSliderComponent.CURRENT_IMAGE < ImageSliderComponent.imageCount && direction === 1) {
        this.next();
      }
      else if (ImageSliderComponent.CURRENT_IMAGE === ImageSliderComponent.imageCount && direction === 1) {
        direction = -1;
        this.prev();
      }
      else if (ImageSliderComponent.CURRENT_IMAGE > 1 && direction === -1) {
        this.prev();
      }
      else if (ImageSliderComponent.CURRENT_IMAGE === 1 && direction === -1) {
        direction = 1;
        this.next();
      }
    }, 1000);
  }
  public stop() {
    clearInterval(ImageSliderComponent.intervalId);
  }
}
