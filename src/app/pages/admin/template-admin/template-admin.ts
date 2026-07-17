import { Component } from '@angular/core';
import { Sidebar } from "../../../components/adminTemplate/sidebar/sidebar";
import { HeaderAdmin } from "../../../components/adminTemplate/header-admin/header-admin";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-template-admin',
  imports: [Sidebar, HeaderAdmin, RouterOutlet],
  templateUrl: './template-admin.html',
  styleUrl: './template-admin.css',
})
export class TemplateAdmin {

}
