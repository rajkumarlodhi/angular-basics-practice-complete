import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postForm: FormGroup = Object();
  posts: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, [Validators.required]),
    })
    this.getPosts();
  }
  getPosts() {
    this.http.get('https://my-rkl-db-default-rtdb.firebaseio.com/posts.json').pipe(map((res: any) => {
      const posts = []
      for (let key in res)
        posts.push({ ...res[key], key })

      return posts;
    })).subscribe((response: any) => {
      console.log(response);
      this.posts = response;
    });
  }
  onCreatePost() {
    console.log(this.postForm.value);
    const postData = this.postForm.value;
    this.http.post('https://my-rkl-db-default-rtdb.firebaseio.com/posts.json', postData).subscribe(response => {
      console.log(response, 'response from backend');
    })
  }

}
