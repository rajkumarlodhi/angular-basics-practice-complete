import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postForm: FormGroup = Object();
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, [Validators.required]),
    })
  }
  onCreatePost() {
    console.log(this.postForm.value);
    const postData = this.postForm.value;
    this.http.post('https://my-rkl-db-default-rtdb.firebaseio.com/posts.json', postData).subscribe(response => {
      console.log(response, 'response from backend');
    })

    //to study firebase to create server for store database to post form
  }

}
