import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { ContactMeComponent } from './pages/landing-page/contact-me/contact-me.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { AboutMeComponent } from './pages/landing-page/about-me/about-me.component';
import { SchedulerComponent } from './components/scheduler/scheduler.component';

@NgModule({
	declarations: [
		AppComponent,
		ComingSoonComponent,
		LandingPageComponent,
		HeaderComponent,
		FooterComponent,
		ContactMeComponent,
		TestimonialsComponent,
		AboutMeComponent,
		SchedulerComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ReactiveFormsModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
