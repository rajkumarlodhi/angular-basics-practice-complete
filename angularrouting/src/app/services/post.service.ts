import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { Post } from "../posts/Post.model";
const url = 'https://my-rkl-db-default-rtdb.firebaseio.com/posts.json';
@Injectable({
    providedIn: 'root'
})
export class postService {
    constructor(private http: HttpClient) { }
    fetchPosts() {
        let searchParams = new HttpParams();
        searchParams = searchParams.append('custom', 'Hai');
        searchParams = searchParams.append('name', 'Raj');
        return this.http.get<{ [key: string]: Post }>(url, {
            headers: new HttpHeaders({
                'custom-header': 'Raj'
            }),
            params: searchParams,
        }).pipe(map((res) => {
            const posts: Post[] = [];
            for (let key in res)
                posts.push({ ...res[key], key })
            return posts;
        }));
    }
    creatPost(postData: Post) {
        return this.http.post(url, postData, {
            headers: new HttpHeaders({
                'custom-header': 'Raj'
            })
        });
    }
    clearPosts() {
        this.http.delete(url).subscribe(response => {
            console.log(response)
        });
    }
}
