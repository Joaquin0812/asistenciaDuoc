import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-lista-de-alumnos',
  templateUrl: './lista-de-alumnos.page.html',
  styleUrls: ['./lista-de-alumnos.page.scss'],
})
export class ListaDeAlumnosPage implements OnInit {
  alumnos=[{nombre:"Diego Lopez",rut:"12.321.543-2"},{nombre:"Juan Quintana",rut:"21.356.675-K"},{nombre:"Catalina Mayorca",rut:"5.321.312-3"},{nombre:"Pamela Astudillo",rut:"24.321.678-1"}]

  constructor(public router:Router, public nav:NavController) { }

  submitBack=()=>{
    this.nav.navigateForward("profesor")
  }

  ngOnInit() {
  }

}
