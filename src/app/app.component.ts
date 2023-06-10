import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularpipesstudies';

  name:string = "";
  surname:string = "";
  date:string = "";
  dollaramount:number =0;
  euroamount:number = 0;
  sterlinamount:number = 0;
  height!:any;
  mile:number =0;

  infos={
    name:"Kenan",
    age:"24",
    department:"ctis"
  }


  onMilesChange(mil:number){
      this.mile = mil
  }


  onNameChange(ad:string){
    this.name = ad 
  }

  onDateChange(tarih:string){
    this.date = tarih
  }

  onDollarAmountChange(tutar:string){
    this.dollaramount = parseFloat(tutar)
  }

  onEuroAmountChange(tutar:string){
    this.euroamount = parseFloat(tutar)
  }

  onSterlinAmountChange(tutar:string){
    this.sterlinamount = parseFloat(tutar);
  }

  onHeightChange(boy:number){
      this.height = boy
  }

  onSurnameChange(surname:string){
    this.surname = surname
  }

}
