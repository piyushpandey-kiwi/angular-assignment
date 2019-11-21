import { Component, OnInit, Input } from '@angular/core';

// Models
import { IPost } from '@models/IPost';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  @Input() post: IPost;

  ngOnInit() {
  }

}
