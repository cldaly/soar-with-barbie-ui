import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ThetaHealingComponent } from './pages/theta-healing/theta-healing.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'theta-healing', component: ThetaHealingComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
