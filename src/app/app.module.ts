import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './views/contato/contato.component';
import { EmpresaComponent } from './views/empresa/empresa.component';
import { LojasComponent } from './views/lojas/lojas.component';
import { HomeComponent } from './views/home/home.component';
import { CompraItemComponent } from './views/compra-item/compra-item.component';
import { CarrinhoComponent } from './views/carrinho/carrinho.component';
import { AppformularioComponent } from './views/appformulario/appformulario.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DialogBoxComponent } from './views/dialog-box/dialog-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    EmpresaComponent,
    LojasComponent,
    HomeComponent,
    CompraItemComponent,
    CarrinhoComponent,
    AppformularioComponent,
    DialogBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [AppformularioComponent]
})
export class AppModule { }
