import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { Query1Component } from './components/query1/query1.component';
import { CommonModule } from '@angular/common';
import {NgChartsModule} from "ng2-charts";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {DataTablesModule} from "angular-datatables";
import { MyComComponent } from './components/my-com/my-com.component';
import { Query2Component } from './components/query2/query2.component';
import { Query3Component } from './components/query3/query3.component';
import { Query4Component } from './components/query4/query4.component';
import { Query5Component } from './components/query5/query5.component';
import { Query6Component } from './components/query6/query6.component';
import { Query7Component } from './components/query7/query7.component';
import { Query8Component } from './components/query8/query8.component';
import { Query9Component } from './components/query9/query9.component';
import { Query10Component } from './components/query10/query10.component';
import { Analytics1aComponent } from './components/analytics1a/analytics1a.component';
import { Analytics1bComponent } from './components/analytics1b/analytics1b.component';
import { Analytics2aComponent } from './components/analytics2a/analytics2a.component';
import { Analytics2bComponent } from './components/analytics2b/analytics2b.component';
import { Analytics3aComponent } from './components/analytics3a/analytics3a.component';
import { Analytics3bComponent } from './components/analytics3b/analytics3b.component';
import { Analytics4aComponent } from './components/analytics4a/analytics4a.component';
import { Analytics4bComponent } from './components/analytics4b/analytics4b.component';
import { Analytics5aComponent } from './components/analytics5a/analytics5a.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    Query1Component,
    MyComComponent,
    Query2Component,
    Query3Component,
    Query4Component,
    Query5Component,
    Query6Component,
    Query7Component,
    Query8Component,
    Query9Component,
    Query10Component,
    Analytics1aComponent,
    Analytics1bComponent,
    Analytics2aComponent,
    Analytics2bComponent,
    Analytics3aComponent,
    Analytics3bComponent,
    Analytics4aComponent,
    Analytics4bComponent,
    Analytics5aComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        NgChartsModule,
        HttpClientModule,
        ReactiveFormsModule,
        DataTablesModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
