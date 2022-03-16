import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pet } from '../pet.model';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-form-pet',
  templateUrl: './form-pet.component.html',
  styleUrls: ['./form-pet.component.css']
})
export class FormPetComponent implements OnInit {

  img: string="";

  @Input() set pet (p:Pet){

    this.form.patchValue(p);
  }
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

    form = this.formBuilder.group({
    nombre:[
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250),
      ],
    ],
    tipo: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.min(1)]],
    tamano: ['', [Validators.required]],
    sexo: ['', [Validators.required,Validators.minLength(5)]],
    nivelActividad: ['', [Validators.required]],
    descripcion: ['', [Validators.required,Validators.maxLength(150)]],
    foto: ['', [Validators.required,Validators.minLength(5),Validators.maxLength(250),]],
    estado: ['', [Validators.required]],
  });

  constructor(
    private petService: PetService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  save() {
    this.onSubmit.emit(this.form.value);
  }

}
