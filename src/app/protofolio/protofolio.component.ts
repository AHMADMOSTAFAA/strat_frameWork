import { Component } from '@angular/core';

@Component({
  selector: 'app-protofolio',
  templateUrl: './protofolio.component.html',
  styleUrls: ['./protofolio.component.css']
})
export class ProtofolioComponent {
  img:string='';
  checker:boolean=false;
  toggler(){
    if(this.checker==false){
      this.checker=true;
    console.log("done1")
    }
    else{
      this.checker=false;
      console.log("done2")
    }
  }
   imgsrc3(){
    this.img="../../assets/images/cake.png"
   }
   imgsrc2(){
    this.img="../../assets/images/circus.png"
   }
   imgsrc1(){
    this.img="../../assets/images/house.png"
   }
   
}
