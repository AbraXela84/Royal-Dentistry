import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Dentist } from './dentist/dentist.component';
import { Home } from './home/home.component';
import { Programari } from './programari/programari.component';
const routes: Routes = [
  {
    path: 'Acasa',
    component: Home
  },
  {
    path: 'Dentisti',
    component: Dentist
  },
  {
    path: 'Programari',
    component: Programari
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
