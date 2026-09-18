import { Component, OnInit } from '@angular/core';

import { ProduitsService } from '../../services/produits';
import { Produit } from '../../models/produit.model';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-produit-detail',
  standalone: true,
  imports: [RouterLink],   
  templateUrl: './produit-detail.html',
  styleUrl: './produit-detail.css'   
})
export class ProduitDetail implements OnInit {
  produit: Produit | undefined;

  constructor(
    private route:ActivatedRoute,
    public produitsService: ProduitsService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.produit = this.produitsService.getProduitById(id);
    }
  }
}
