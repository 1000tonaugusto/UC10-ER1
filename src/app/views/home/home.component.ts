import { Component, OnInit } from '@angular/core';
import { Novidades } from 'src/app/models/novidades';
import { Promocoes1 } from 'src/app/models/promocoes1';
import { Promocoes2 } from 'src/app/models/promocoes2';
import { NovidadesService } from 'src/app/services/novidades.service';
import { Promocoes1Service } from 'src/app/services/promocoes1.service';
import { Promocoes2Service } from 'src/app/services/promocoes2.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    listaNovidades = [] as Novidades[];
    listaPromocoes1 = [] as Promocoes1[];
    listaPromocoes2 = [] as Promocoes2[];

    constructor(private novidadeService: NovidadesService,
                private promocoes1Service: Promocoes1Service,
                private promocoes2Service: Promocoes2Service) { }


    ngOnInit(): void {
        this.carregar();
    }

    carregar() {
        this.novidadeService.getNovidades().subscribe((
            novidadesRec: Novidades[]) => {
                this.listaNovidades = novidadesRec
        })
        this.promocoes1Service.getPromocoes1().subscribe((
            promocoes1Rec: Promocoes1[]) => {
                this.listaPromocoes1 = promocoes1Rec
        })
        this.promocoes2Service.getPromocoes2().subscribe((
            promocoes2Rec: Promocoes2[]) => {
                this.listaPromocoes2 = promocoes2Rec
        })
  }

}
