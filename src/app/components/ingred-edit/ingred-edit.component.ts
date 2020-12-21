import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ingred } from 'src/app/models/ingred';
import { IngredServiceService } from 'src/app/services/ingred-service.service';

@Component({
	selector: 'app-ingred-edit',
	templateUrl: './ingred-edit.component.html',
	styleUrls: ['./ingred-edit.component.css']
})
export class IngredEditComponent implements OnInit {
	ingred: Ingred = {
		"id": 0,
		"title": "",
		"photo": "",
		"price": 0,
		"isEnabled": false
	};
	ingredForm: FormGroup;
	constructor(private ingredService: IngredServiceService, private route: ActivatedRoute, private fb: FormBuilder) { }

	ngOnInit(): void {
		this.route.params.subscribe((params: Params) => {
			this.ingredService.getById(params.id)
				.subscribe(response => {
					this.ingred = response;
					this.ingredForm = this.fb.group({
						title: ["", [Validators.required, Validators.minLength(2)]],
						// price: ["", [Validators.required, Validators.min(1)]],
						// isEnabled: [""]
					});
				});
		});

	}
	submit(form) {
		this.ingred.title = form.value.title;
		// this.ingred.price = form.value.price;
		// this.ingred.isEnabled = form.value.isEnabled;
		console.log(this.ingred);
	}
}
