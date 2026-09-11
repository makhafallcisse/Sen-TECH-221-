import {Injectable} from '@angular/core';

import {Produit} from '../models/produit.model';

@Injectable({
    providedIn: "root"
})
export class ProduitsService {
    private produits: Produit[] = [
  {
    id: 1,
    nom: 'MacBook Air M2',
    marque: 'Apple',
    categorie: 'Ordinateur portable',
    prix: 850000,
    image: "/image/produits/macbook air m2.jfif",
    descriptionCourte: 'Ultra léger, autonomie longue durée, puce M2.',
    description: 'Le MacBook Air M2 combine puissance et légèreté avec sa puce Apple M2, un écran Liquid Retina et jusqu\'à 18h d\'autonomie. Idéal pour les études comme pour le travail créatif.',
    enStock: true
  },
  {
    id: 2,
    nom: 'MacBook Pro M3',
    marque: 'Apple',
    categorie: 'Ordinateur portable',
    prix: 1050000,
    image: "/image/produits/macbook pro m3.jfif",
    descriptionCourte: 'Puissance professionnelle, écran Liquid Retina XDR.',
    description: 'Le MacBook Pro M3 est une machine trés puissante idéal pour le montage vidéo ,la programmation et les taches éxigeantes. avec 36 Go de Ram et 1 To de stockage et son écran Liquid Retina XDR de 120 Hz ce PC est une veritable machine de guerre.',
    enStock: true
  },
  {
    id: 3,
    nom: 'MacBook Pro M2"',
    marque: 'Apple',
    categorie: 'Ordinateur portable',
    prix: 750000,
    image: "/image/produits/macbook pro m2.jfif",
    descriptionCourte: 'Puissance professionnelle, écran Liquid Retina XDR.',
    description: 'Conçu pour les professionnels exigeants : montage vidéo, développement, design. Puce M2 Pro, écran mini-LED, excellente autonomie.',
    enStock: true
  },
  {
    id: 4,
    nom: 'HP Probook 455 G8',
    marque: 'HP',
    categorie: 'Ordinateur portable',
    prix: 250000,
    image: '/image/produits/hp probook 445 g8.jfif',
    descriptionCourte: 'Bon rapport qualité-prix pour un usage professionel et quotidient.',
    description: 'Ordinateur portable polyvalent avec processeur AMD Rysen 5, 16 Go de RAM et 512 Go SSD. Parfait pour la bureautique et aussi la programmation.',
    enStock: true
  },
  {
    id: 5,
    nom: 'HP ZBook',
    marque: 'HP',
    categorie: 'Ordinateur portable',
    prix: 230000,
    image: '/image/produits/hp zbook.jfif',
    descriptionCourte: 'Robuste et sécurisé, pensé pour les professionnels.',
    description: 'Modèle professionnel avec châssis renforcé, lecteur d\'empreintes digitales et processeur Intel Core i7. Idéal pour un usage en entreprise.',
    enStock: false
  },
  {
    id: 6,
    nom: 'HP EliteBook 840 G8',
    marque: 'HP',
    categorie: 'Ordinateur portable',
    prix: 190000,
    image: '/image/produits/hp probook 840 g8.jfif',
    descriptionCourte: 'Robuste et sécurisé, pensé pour les professionnels.',
    description: 'Modèle professionnel avec châssis renforcé, lecteur d\'empreintes digitales et processeur Intel Core I 5de 11e génération. Idéal pour un usage en entreprise et de la programmation.',
    enStock: false
  },
  {
    id: 7,
    nom: 'Lenovo ThinkPad E14',
    marque: 'Lenovo',
    categorie: 'Ordinateur portable',
    prix: 160000,
    image: '/image/produits/lenovo thinkpad e 14.jfif',
    descriptionCourte: 'Fiabilité légendaire, clavier confortable.',
    description: 'La gamme ThinkPad est réputée pour sa robustesse et son clavier reconnu comme l\'un des meilleurs du marché. Un excellent compagnon de travail.',
    enStock: true
  },
  {
    id: 8,
    nom: 'Lenovo ThinkPad T480',
    marque: 'Lenovo',
    categorie: 'Ordinateur portable',
    prix: 200000,
    image: '/image/produits/lenovo thinkpad t480.jfif',
    descriptionCourte: 'Design fin et léger et trés portable.',
    description: 'Ordinateur portable fin et léger, parfait pour les étudiants et les déplacements fréquents. Écran Full HD et bonne autonomie.',
    enStock: true
  },
  {
    id: 9,
    nom: 'Dell Lattitude 5420',
    marque: 'Dell',
    categorie: 'Ordinateur portable',
    prix: 200000,
    image: '/image/produits/dell latittude 5420.jfif',
    descriptionCourte: 'Polyvalent, adapté aux études et au travail.',
    description: 'Ordinateur portable Dell fiable avec un bon équilibre entre performance et prix. Convient pour la bureautique, les études et la programmation avec son processeur Intel Core I 7 de 11e génération et sa RAM de 16 Go.',
    enStock: true
  },
  {
    id: 10,
    nom: 'Dell XPS 13',
    marque: 'Dell',
    categorie: 'Ordinateur portable',
    prix: 900000,
    image: '/image/produits/dell xps 13.jfif',
    descriptionCourte: 'Design premium, écran bord à bord.',
    description: 'Le XPS 13 est réputé pour son design haut de gamme et son écran quasiment sans bordures. Excellent choix pour un usage professionnel élégant.',
    enStock: false
  },
  {
    id: 11,
    nom: 'PlayStation 5 Slim',
    marque: 'Sony',
    categorie: 'Console de jeux',
    prix: 400000,
    image: '/image/produits/play 5 slim.jfif',
    descriptionCourte: 'Design premium, écran bord à bord.',
    description: 'Le XPS 13 est réputé pour son design haut de gamme et son écran quasiment sans bordures. Excellent choix pour un usage professionnel élégant.',
    enStock: false
  },
  {
    id: 12,
    nom: 'PlayStation 5 Pro',
    marque: 'Sony',
    categorie: 'Console de jeux',
    prix: 625000,
    image: '/image/produits/play 5 pro.jfif',
    descriptionCourte: 'Design premium, écran bord à bord.',
    description: 'Le XPS 13 est réputé pour son design haut de gamme et son écran quasiment sans bordures. Excellent choix pour un usage professionnel élégant.',
    enStock: false
  },

  {
    id: 13,
    nom: 'XBOX Series S',
    marque: 'Microsoft',
    categorie: 'Console de jeux',
    prix: 330000,
    image: '/image/produits/xbox series s.jfif',
    descriptionCourte: 'Design premium, écran bord à bord.',
    description: 'Le XPS 13 est réputé pour son design haut de gamme et son écran quasiment sans bordures. Excellent choix pour un usage professionnel élégant.',
    enStock: false
  },
];

  getProduits(): Produit[] {
    return this.produits;
  }

  getProduitById(id: number): Produit | undefined {
    return this.produits.find(produit => produit.id === id);
  }
}