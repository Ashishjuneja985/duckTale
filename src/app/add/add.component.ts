import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from '../Shared/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  ashish!: FormGroup
  userId: any;
  isSubmitted:boolean = false;
  update: boolean = false
  dataSubmitted: boolean = false
  employeData: any;
  constructor(
    private svc: ServiceService, 
    private route: ActivatedRoute, 
    private route2: Router
    ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
    if (this.route.snapshot.params['id']) {
      this.userId = this.route.snapshot.params['id']
      console.log(this.userId)
      this.update = true;
      this.getUserDetail(this.userId);
    }
    this.ashish = new FormGroup({
      employeeName: new FormControl("", [Validators.required]),
      departments: new FormControl("", [Validators.required]),
      salary: new FormControl("", [Validators.required])
    })
  }
  addForm() {
    if (this.ashish.invalid) {
      this.isSubmitted = true;
      return;
    }
    console.log(this.ashish.value);
    var obj = {
      employeeName: this.ashish.controls['employeeName'].value,
      departments: this.ashish.controls['departments'].value,
      salary: this.ashish.controls['salary'].value,
    }
    console.log(obj)
    this.svc.addEmployee(obj).subscribe((res) => {
      console.log(res)
      this.dataSubmitted = true;
      setTimeout(() => {
        this.route2.navigate(['/list'])
      }, 2000);
    })

  }
  getUserDetail(id: number) {
    console.log(id)
    this.svc.getDataId(id).subscribe((res) => {
      this.employeData = res
      console.log(this.employeData)
      this.ashish = new FormGroup({
        'employeeName': new FormControl(this.employeData.employeeName, [Validators.required]),
        'departments': new FormControl(this.employeData.departments, [Validators.required]),
        'salary': new FormControl(this.employeData.salary, [Validators.required]),
      })
    })
  }
  editForm() {
    if (this.ashish.invalid) {
      this.isSubmitted = true;
      return;
    }
    console.log(this.ashish.value)
    var id = this.userId;
    var obj = {
      employeeName: this.ashish.controls['employeeName'].value,
      departments: this.ashish.controls['departments'].value,
      salary: this.ashish.controls['salary'].value,
    }
    this.svc.updateData(id, obj).subscribe((res) => {
      console.log(res)
      this.dataSubmitted = true;
      setTimeout(() => {
        this.route2.navigate(['/list'])
      }, 2000);
    })
  }

  get employeeName() {
    return this.ashish.get('employeeName')
  }
  get departments() {
    return this.ashish.get('departments')
  }
  get salary() {
    return this.ashish.get('salary')
  }

}
