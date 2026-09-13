import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProduitsService } from '../../services/produits';
import { Produit } from '../../models/produit.model';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './accueil.html',
  styleUrl: './accueil.scss',
})
export class Accueil implements OnInit {
produits: Produit[] =[];
 produitsFiltres: Produit[] = [];
  marques: string[] = [];
  marqueSelectionnee: string = 'Toutes';

  constructor(private produitsService: ProduitsService) {}

  ngOnInit(): void {
    this.produits = this.produitsService.getProduits();
    this.produitsFiltres = this.produits;
    this.marques = ['Toutes', ...this.produitsService.getMarques()];
  }

  filtrerParMarque(marque: string): void {
    this.marqueSelectionnee = marque;
    if (marque === 'Toutes') {
      this.produitsFiltres = this.produits;
    } else {
      this.produitsFiltres = this.produits.filter(p => p.marque === marque);
    }
  }
}