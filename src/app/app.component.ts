import { Component, OnInit } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { MenuListComponent } from './menu/menu-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  ,providers: [MenuListComponent]
})
export class AppComponent implements OnInit {
  title = 'app';
  menus: MenuComponent[] = [
	new MenuComponent('First Teachers Ministry','/', 'System name', true)
	,new MenuComponent('Home','/', 'Home', true)
	,new MenuComponent('About','/about', 'About', true)
  ];

  constructor(private menuList: MenuListComponent) {
		this.menuList.menus = this.menus;	
	}

	ngOnInit() {	
	}
}
