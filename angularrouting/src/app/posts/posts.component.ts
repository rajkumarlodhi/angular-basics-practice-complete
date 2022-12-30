import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { postService } from '../services/post.service';
import { Post } from './Post.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postForm: FormGroup = Object();
  posts: Post[] = [];
  constructor(private postService: postService) { }

  ngOnInit(): void {
    this.postForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'content': new FormControl(null, [Validators.required]),
    })
    this.getPosts();
  }
  getPosts() {
    this.postService.fetchPosts().subscribe((response) => {
      console.log(response);
      this.posts = response;
    });
  }
  onCreatePost() {
    console.log(this.postForm.value);
    const postData: Post = this.postForm.value;
    this.postService.creatPost(postData).subscribe((response) => {
      console.log(response, 'response from backend');
    })
  }

}
