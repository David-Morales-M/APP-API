import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-concesionario',
  templateUrl: './card-concesionario.component.html',
  styleUrls: ['./card-concesionario.component.scss']
})
export class CardConcesionarioComponent implements OnInit {

  arregloCards = [
    {
        "nombreConcesionario": "Toyota",
        "direccion": "Av. 10 de Agosto y Carrión",
        "telefono": "1800 227 222",
        "abierto": true,
        "web": "www.casabaca.com",
        "autos": [
            {
                "modelo": "Fortuner",
                "año": 2020,
                "nuevo": true,
                "color": "Verde Oscuro",
                "precio": 49990
            },
            {
                "modelo": "Corolla",
                "año": 2019,
                "nuevo": false,
                "color": "Azul",
                "precio": 19900
            }
        ]
    },
    {
        "nombreConcesionario": "Mazda",
        "direccion": "Av. 10 de Agosto N40-94 y Av. Gaspar de Villarroel",
        "telefono": "2445392",
        "abierto": false,
        "web": "www.mazda.com",
        "autos": [
            {
                "modelo": "Mazda 3",
                "año": 2020,
                "nuevo": true,
                "color": "Rojo",
                "precio": 38000
            },
            {
                "modelo": "BT-50",
                "año": 2018,
                "nuevo": false,
                "color": "Negro",
                "precio": 40000
            },
            {
                "modelo": "Grand Touring",
                "año": 2021,
                "nuevo": true,
                "color": "Rojo",
                "precio": 70999
            }
        ]
    },
    {
        "nombreConcesionario": "Nissan",
        "direccion": "Av. Francisco de Orellana E2-30",
        "telefono": "0958972022",
        "abierto": true,
        "web": "www.nissan.com.ec",
        "autos": [
            {
                "modelo": "X-Trail",
                "año": 2015,
                "nuevo": false,
                "color": "Azul Marino",
                "precio": 25799
            },
            {
                "modelo": "Kicks",
                "año": 2021,
                "nuevo": true,
                "color": "Ocre",
                "precio": 27990
            },
            {
                "modelo": "Frontier 4x4",
                "año": 2020,
                "nuevo": true,
                "color": "Gris",
                "precio": 64999.99
            }
        ]
    },
    {
        "nombreConcesionario": "Maserati",
        "direccion": "Av. de los Shyris N32-58",
        "telefono": "6055979",
        "abierto": true,
        "web": "www.maseratiecuador.com",
        "autos": [
            {
                "modelo": "Gran Turismo",
                "año": 2021,
                "nuevo": true,
                "color": "Azul",
                "precio": 115600
            },
            {
                "modelo": "Ghibli",
                "año": 2021,
                "nuevo": true,
                "color": "Plateado",
                "precio": 86700
            }
        ]
    },
    {
        "nombreConcesionario": "Mercedes Benz",
        "direccion": "Av. República",
        "telefono": "2468517",
        "abierto": false,
        "web": "www.mercedesbenz.com.ec",
        "autos": [
            {
                "modelo": "GLC",
                "año": 2020,
                "nuevo": false,
                "color": "Plateado",
                "precio": 77000
            }
        ]
    },
    {
        "nombreConcesionario": "Mitsubishi",
        "direccion": "Av. 10 de Agosto y Juan de Ascaray",
        "telefono": "2940800",
        "abierto": false,
        "web": "www.mitsubishi-motors.com.ec",
        "autos": [
            {
                "modelo": "Montero Sport",
                "año": 2021,
                "nuevo": true,
                "color": "Negro",
                "precio": 52990
            }
        ]
    },
    {
        "nombreConcesionario": "Chevrolet",
        "direccion": "Av. Eloy Alfaro N43-02 y los Granados ",
        "telefono": "3815370",
        "abierto": true,
        "web": "www.chevrolet.com.ec",
        "autos": [
            {
                "modelo": "Aveo",
                "año": 2001,
                "nuevo": false,
                "color": "Rojo",
                "precio": 3700
            }
        ]
    }
]

  constructor() { }

  ngOnInit(): void {

  }

}
