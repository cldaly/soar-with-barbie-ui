import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
	selector: 'app-scheduler',
	templateUrl: './scheduler.component.html',
	styleUrls: ['./scheduler.component.css']
})
export class SchedulerComponent implements OnInit, OnDestroy {
	public height: String = "0";
	public loading: boolean;

	constructor() {
		this.loading = true;
		console.log("Constructed");
	}

	ngOnInit(): void {
		window.addEventListener("message", this.schedulerListener);
	}

	private schedulerListener = (event: MessageEvent<any>) => {
		if (typeof event.data == 'string') {
			let h = event.data.split(":")[1];
			document.getElementById("scheduler-frame").style.height = h + "px";
		}
	}

	public handleLoad(): void {
		this.loading = false;
	}

	ngOnDestroy(): void {
		window.removeEventListener("message", this.schedulerListener);
	}
}
