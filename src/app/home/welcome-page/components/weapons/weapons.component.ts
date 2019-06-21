import { Component, OnInit } from '@angular/core';
import { WeaponService } from '../../services/weapon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.scss']
})
export class WeaponsComponent implements OnInit {

  public weapons: any[] = [];

  constructor(private weaponsService: WeaponService, private router: Router) { }

  ngOnInit() {
    this.initWeapons();
  }

  public editCreator(item: any) {
    this.weaponsService.weapon = item;
    this.router.navigate(['/editcreator'])
  }

  public deleteCreator(item: any) {
    this.weaponsService.deleteWeapon(item.id).subscribe(
      r => {
        this.initWeapons();
      }
    )
  }

  private initWeapons() {
    this.weaponsService.getWeapons().subscribe(
      r => {
        this.weapons = r;
      }
    );
  }

}
