import { Component, OnInit } from '@angular/core';
import { CreatorService } from '../../services/creator.service';
import { Creator } from 'src/app/shared/models/Creator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-creator',
  templateUrl: './edit-creator.component.html',
  styleUrls: ['./edit-creator.component.scss']
})
export class EditCreatorComponent implements OnInit {

  public name: string;
  public country: string;

  private id: number;

  constructor(private creatorService: CreatorService, private router: Router) { }

  ngOnInit() {
    const creator = this.creatorService.creator;
    this.name = creator.name;
    this.country = creator.country;
    this.id = creator.id;
  }

  public updateCreator() {
    const creator: Creator = {
      id: this.id,
      name: this.name,
      country: this.country
    };
    this.creatorService.updateCreator(creator).subscribe(
      r => {
        this.router.navigate(['/creators']);
      }
    )
  }

}
