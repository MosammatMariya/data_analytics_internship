import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddTutorialComponent} from "./components/add-tutorial/add-tutorial.component";
import {Query1Component} from "./components/query1/query1.component";
import {MyComComponent} from "./components/my-com/my-com.component";
import {Query2Component} from "./components/query2/query2.component";
import {Query3Component} from "./components/query3/query3.component";
import {Query4Component} from "./components/query4/query4.component";
import {Query5Component} from "./components/query5/query5.component";
import {Query6Component} from "./components/query6/query6.component";
import {Query7Component} from "./components/query7/query7.component";
import {Query8Component} from "./components/query8/query8.component";
import {Query9Component} from "./components/query9/query9.component";
import {Query10Component} from "./components/query10/query10.component";
import {Analytics1aComponent} from "./components/analytics1a/analytics1a.component";
import {Analytics1bComponent} from "./components/analytics1b/analytics1b.component";
import {Analytics2aComponent} from "./components/analytics2a/analytics2a.component";
import {Analytics2bComponent} from "./components/analytics2b/analytics2b.component";
import {Analytics3aComponent} from "./components/analytics3a/analytics3a.component";
import {Analytics3bComponent} from "./components/analytics3b/analytics3b.component";
import {Analytics4aComponent} from "./components/analytics4a/analytics4a.component";
import {Analytics4bComponent} from "./components/analytics4b/analytics4b.component";
import {Analytics5aComponent} from "./components/analytics5a/analytics5a.component";


const routes: Routes = [
  {path: 'first-component', component: AddTutorialComponent},
  {path: '1', component: Query1Component},
  {path: 'my-com', component: MyComComponent},
  {path: '2', component: Query2Component},
  {path: '3', component: Query3Component},
  {path: '4', component: Query4Component},
  {path: '5', component: Query5Component},
  {path: '6', component: Query6Component},
  {path: '7', component: Query7Component},
  {path: '8', component: Query8Component},
  {path: '9', component: Query9Component},
  {path: '10', component: Query10Component},
  {path: 'a1a', component:Analytics1aComponent},
  {path: 'a1b',component: Analytics1bComponent},
  {path: 'a2a',component: Analytics2aComponent},
  {path: 'a2b',component: Analytics2bComponent},
  {path: 'a3a',component: Analytics3aComponent},
  {path:'a3b',component: Analytics3bComponent},
  {path:'a4a',component: Analytics4aComponent},
  {path:'a4b',component: Analytics4bComponent},
  {path:'a5a',component: Analytics5aComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
