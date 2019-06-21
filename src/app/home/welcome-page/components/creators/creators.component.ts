import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CreatorService } from '../../services/creator.service';
import { Creator } from 'src/app/shared/models/Creator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  public creators: any[] = [];

  constructor(private creatorsService: CreatorService, private router: Router) { }

  ngOnInit() {
    this.initCreators();
  }

  public editCreator(item: Creator) {
    this.creatorsService.creator = item;
    this.router.navigate(['/editcreator'])
  }

  public deleteCreator(item: Creator) {
    this.creatorsService.deleteCreator(item.id).subscribe(
      r => {
        this.initCreators();
      }
    )
  }

  private initCreators() {
    this.creatorsService.getCreators().subscribe(
      r => {
        this.creators = r;
      }
    );
  }
}
