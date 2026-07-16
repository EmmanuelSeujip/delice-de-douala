import { Component } from '@angular/core';
import { Sidebar } from "../../../components/adminTemplate/sidebar/sidebar";
import { HeaderAdmin } from "../../../components/adminTemplate/header-admin/header-admin";

@Component({
  selector: 'app-template-admin',
  imports: [Sidebar, HeaderAdmin],
  templateUrl: './template-admin.html',
  styleUrl: './template-admin.css',
})
export class TemplateAdmin {

}
