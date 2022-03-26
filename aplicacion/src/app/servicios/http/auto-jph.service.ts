import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AutoJphCreateInterface } from '../interface/auto-jph-create.interface';
import { AutoJphInterface } from '../interface/auto-jph.interface';
import { ConcesionarioJphInterface } from '../interface/concesionario-jph.interface';

@Injectable({
  providedIn: 'root'
})
export class AutoJphService {

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  buscarTodos(parametrosConsulta?:any): Observable<ConcesionarioJphInterface> {
    const url = environment.urlJPC + '/autos/' + parametrosConsulta;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as ConcesionarioJphInterface
        )
      );
  }

  buscarUno(nombreConcesionario: string): Observable<AutoJphInterface> {
    const url = environment.urlJPC + '/autos/' + nombreConcesionario;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as AutoJphInterface
        )
      );
  }

  buscarAuto(parametrosConsulta?:any): Observable<ConcesionarioJphInterface> {
    const url = environment.urlJPC + '/autos/' + parametrosConsulta;
    return this.httpClient
      .get(url)
      .pipe(
        map(
          (resultadoEnData) => resultadoEnData as ConcesionarioJphInterface
        )
      );
  }

  crearAuto(nombreConcesionario:string, datosAuto:AutoJphCreateInterface): Observable<any> {
    const url = environment.urlJPC + '/autos/'+ nombreConcesionario;
    return this.httpClient
      .post(url, datosAuto);
  }

  actualizarAuto(datosActualizarAuto:AutoJphCreateInterface,nombreConcesionario:string, modelo:string): Observable<any> {
    const url = environment.urlJPC + '/autos/'+ nombreConcesionario + '&' + modelo;
    return this.httpClient
      .put(url, datosActualizarAuto);
  }

  eliminarAuto(nombreConcesionario:string, modelo:string): Observable<any> {
    const url = environment.urlJPC + '/autos/'+ nombreConcesionario + '&' + modelo;
    return this.httpClient
      .delete(url);
  }

}
