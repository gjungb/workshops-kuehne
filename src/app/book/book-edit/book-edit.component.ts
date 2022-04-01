import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.scss'],
})
export class BookEditComponent implements OnInit {
  form!: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('Moby Dick', {
        validators: [Validators.required, Validators.minLength(2)],
      }),
      isbn: new FormControl({
        value: '123-756',
        disabled: true,
      }),
    });

    this.form.statusChanges.subscribe({
      next: (status) => console.log(status),
    });

    this.form.valueChanges.subscribe({
      next: (value) => console.log(value),
    });

    const titleCtrl = this.form.get('title');

    titleCtrl?.valueChanges.pipe(debounceTime(300)).subscribe({
      next: (value) => console.log(value),
    });
  }
}
