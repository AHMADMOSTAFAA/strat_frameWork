import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.components';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact.component';
import { ProtofolioComponent } from './protofolio/protofolio.component';

const routes: Routes = [
  { path:'',redirectTo:'home',pathMatch:'full',},
 { path:'home',component:HomeComponent,title:"homepage"},
 { path:'about',component:AboutComponent},
 { path:'contact',component:ContactComponent},
 { path:'protofolio',component:ProtofolioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
