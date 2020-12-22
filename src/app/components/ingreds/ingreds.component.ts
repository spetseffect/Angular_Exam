import { Component, OnInit } from '@angular/core';
import { Ingred } from 'src/app/models/ingred';
import { IngredServiceService } from 'src/app/services/ingred-service.service';

@Component({
	selector: 'app-ingreds',
	templateUrl: './ingreds.component.html',
	styleUrls: ['./ingreds.component.css']
})
export class IngredsComponent implements OnInit {
	ingreds: Ingred[];
	constructor(private ingredService: IngredServiceService) { }

	ngOnInit(): void {
		this.ingredService.getData().subscribe(response => {
			this.ingreds = response;
		});
	}


}
