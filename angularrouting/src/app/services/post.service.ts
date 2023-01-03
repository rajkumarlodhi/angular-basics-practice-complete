import { HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, switchMap, take, tap } from "rxjs";
import { Post } from "../posts/Post.model";
import { AuthService } from "./auth.service";
const url = 'https://my-rkl-db-default-rtdb.firebaseio.com/posts.json';
@Injectable({
    providedIn: 'root'
})
export class postService {
    constructor(private http: HttpClient, private authService: AuthService) { }
    fetchPosts() {
        return this.http.get<{ [key: string]: Post }>(url).pipe(map((res) => {
            const posts: Post[] = [];
            for (let key in res)
                posts.push({ ...res[key], key })
            return posts;
        }))
    }
    creatPost(postData: Post) {
        return this.http.post(url, postData, {
            headers: new HttpHeaders({
                'custom-header': 'Raj'
            }),
            observe: 'response',
        });
    }
    clearPosts() {
        this.http.delete(url, {
            observe: 'events',
            responseType: 'text',
        }).pipe(tap((response: any) => {
            if (response === HttpEventType.Sent) {
                console.log('request sent')
            }
            if (response === HttpEventType.Response) {
                console.log(response);
            }
        })).subscribe(response => {
            console.log(response)
        });
    }
}
