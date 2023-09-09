import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
 
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  mail:string=""
  pass:string=""

  
  constructor(public nav:NavController) {}
  
  submitForm=()=>{
    console.log(this.mail)
    console.log(this.pass)
    const dominio=this.mail.split("@")[1]
    console.log(dominio);
    
    if (dominio=="duoc.cl"){
      const nombre=this.mail.split(".")[0]
      this.nav.navigateForward("alumno",{state:{nombre:nombre,correo:this.mail}})
    }else if(dominio=="profesor.duoc.cl"){
      const nombre=this.mail.split(".")[0]
      this.nav.navigateForward("profesor",{state:{nombre:nombre,correo:this.mail}})
    }else{
      
    }
    
  }
  
}
