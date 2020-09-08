import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl, Validators, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-new-course-from-component',
  templateUrl: './new-course-from-component.component.html',
  styleUrls: ['./new-course-from-component.component.css']
})
export class NewCourseFromComponentComponent  {

  form = new FormGroup({
    topics : new FormArray([])
  });

  addTopic(topic : HTMLInputElement){
   
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  get topics(){
     return this.form.get('topics') as FormArray;
  }

  removeTopic(topic : FormControl){
    let index  = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }
}
