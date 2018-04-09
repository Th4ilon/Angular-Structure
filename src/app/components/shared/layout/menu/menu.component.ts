import { Component, OnInit } from '@angular/core';
import * as data from './data.json';
// router
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public router: Router) { }
  public menu = JSON.parse(JSON.stringify(data));
  public active = false;
  private collapsedItems: string[] = new Array();

  ngOnInit() {
    // Establece la visbilidad del menu según los roles del usuario identificado
    this.estableceMenu();
  }
  toggleCollapse(id: string) {
    const indice = this.collapsedItems.indexOf(id);
    let salida = false;
    if (indice > -1) {
      this.collapsedItems.splice(indice, 1);
      salida = false;
    } else {
      this.collapsedItems.push(id);
      salida = true;
    }
    return salida;
  }

  isCollapsed(id: string) {
    const indice = this.collapsedItems.indexOf(id);
    let salida = false;
    if (indice > -1) {
      salida = true;
    }
    return salida;
  }

  estableceMenu() {
    const rolesUser = [1, 2];
    if (this.menu) {
      // let itemL1 of getMenuArray(); let iL1 = index
      const menuArray = this.getMenuArray();
      for (const l1 of menuArray) {
        for (let l2 = 0; l2 < this.menu[l1].length; l2++) {
          // Se iteran los distintos grupos de opciones del menú
          const grupoOpcionesObj = this.menu[l1][l2];
          const grupoSel = this.getCurrentKey(grupoOpcionesObj, 0);
          let noTieneGrupo = true;
          grupoOpcionesObj[grupoSel].forEach(function (opcion) {
            // Se iteran las distintas opciones de cada grupo
            if (rolesUser) {
              for (let j = 0; j < rolesUser.length; j++) {
                // Se iteran los roles de usuario, si alguna opción de menú admite
                // un rol existente en el usuario se marca visible
                if (opcion.roles.includes(rolesUser[j])) {
                  opcion.hidden = false;
                  noTieneGrupo = false;
                }
              }
            }
          });
          if (noTieneGrupo) {
            // Elimna grupo de opciones, si no tiene visible ninguna
            delete grupoOpcionesObj[grupoSel];
          }
        }
      }
    }
  }

  getCurrentKey(obj, index) {
    // Devuelve la key dada una variable JSON y un indice
    return Object.getOwnPropertyNames(obj)[index];
  }

  getMenuArray() {
    return Object.getOwnPropertyNames(this.menu);
  }

  getMenuId(nivel, itemIndex) {
    return 'mnu_' + nivel + '_' + itemIndex;
  }

  reiniciaListas(tabla: string) {
    // Si se ha hecho click en una opción de menu tabla auxiliares y
    // hay resultados cacheados, dicha lista se borra
  }

}
