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
	formErrors = {
		"title": "",
		"price": "",
		"isEnabled": ""
	};
	validationMessages = {
		"title": {
			"required": "Обязательное поле.",
			"minLength": "Минимум 2 символа."
		},
		"price": {
			"required": "Обязательное поле.",
			"min": "Где вы видели отрицательную цену? Введите адекватное значение."
		},
		"isEnabled": {}
	};
	constructor(private ingredService: IngredServiceService, private route: ActivatedRoute, private fb: FormBuilder) { }
	ngOnInit(): void {
		let id: number;
		this.route.params.subscribe((params: Params) => {
			id = params.id;
		});
		this.ingredForm = this.fb.group({
			title: ["", [Validators.required, Validators.minLength(2)]],
			price: ["", [Validators.required, Validators.min(0)]],
			isEnabled: [false, []]
		});
		this.ingredService.getById(id)
			.subscribe(data => {
				this.ingred = data;
				//this.onValueChange(data);
				this.ingredForm.valueChanges
					.subscribe(data => {
						this.onValueChange(data);
					});
			});
	}
	onValueChange(data?: any) {
		let form = this.ingredForm;
		for (let field in this.formErrors) {
			this.formErrors[field] = "";
			let control = form.get(field);
			if (control && control.dirty && !control.valid) {
				let message = this.validationMessages[field];
				for (let key in control.errors) {
					this.formErrors[field] += message[key] + " ";
				}
			}
		}
	}
	submit(form) {
		this.ingred.title = form.value.title;
		this.ingred.price = form.value.price;
		this.ingred.isEnabled = form.value.isEnabled;
		console.log(this.ingred);
	}
}
