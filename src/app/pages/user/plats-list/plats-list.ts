import { Component, signal } from '@angular/core';
import { ALaUne } from '../../../components/user/platList/a-la-une/a-la-une';
import Plat from '../../../models/plat';
import { Carte } from "../../../components/carte/carte";

@Component({
  selector: 'app-plats-list',
  imports: [ALaUne, Carte],
  templateUrl: './plats-list.html',
  styleUrl: './plats-list.css',
})
export class PlatsList {
  plat = signal<Plat>({
    description: "Découvrez l'authenticité de Douala avec ce magnifique Bar entier, braisé au feu de bois selon la tradition. Accompagné de frites de plantain dorées, de miondo tendre et de notre sauce piment secrète. Une expérience gastronomique inoubliable à partager.",
    image: "assets/images/alaune.png",
    nom: "Grand Plateau de Bar Braisé",
    prix: 15000,
  })
}
