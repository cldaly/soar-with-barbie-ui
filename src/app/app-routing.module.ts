import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulerComponent } from './components/scheduler/scheduler.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ThetaHealingComponent } from './pages/theta-healing/theta-healing.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'theta-healing', component: ThetaHealingComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'book-appointment', component: SchedulerComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
