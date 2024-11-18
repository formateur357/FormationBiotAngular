/**
 * La fonction `describeProduct` génère une description d'un produit.
 * Elle utilise des paramètres avec des valeurs par défaut pour gérer
 * les informations optionnelles comme la catégorie et la réduction.
 *
 * @param name - Le nom du produit (obligatoire).
 * @param price - Le prix initial du produit en euros (obligatoire).
 * @param category - La catégorie du produit (optionnelle, par défaut "General").
 * @param discount - La réduction en pourcentage (optionnelle, par défaut 0).
 * @returns Une chaîne formatée décrivant le produit.
 */
function describeProductTs(
  name: string, // Nom du produit
  price: number, // Prix initial en euros
  category: string = "General", // Catégorie avec une valeur par défaut
  discount: number = 0 // Réduction avec une valeur par défaut
): string {
  // 1. Calcul du prix final en tenant compte de la réduction.
  // La réduction est calculée comme (prix * pourcentage) / 100.
  const finalPrice: number = price - (price * discount) / 100;

  // 2. Retour d'une chaîne formatée avec toutes les informations du produit.
  // Utilisation de la syntaxe `template string` pour rendre le code plus lisible.
  return `Product: ${name}
Category: ${category}
Original Price: ${price}€
Discount: ${discount}%
Final Price: ${finalPrice.toFixed(2)}€`; // `.toFixed(2)` pour afficher 2 décimales
}

// === Exemple d'utilisation de la fonction ===

// Exemple 1 : Appel avec tous les paramètres.
console.log(describeProduct("Smartphone", 799, "Electronics", 10));
/* 
Sortie :
Product: Smartphone
Category: Electronics
Original Price: 799€
Discount: 10%
Final Price: 719.10€
*/

// Exemple 2 : Appel avec les paramètres obligatoires seulement.
console.log(describeProduct("Notebook", 15));
/* 
Sortie :
Product: Notebook
Category: General
Original Price: 15€
Discount: 0%
Final Price: 15.00€
*/

// Exemple 3 : Appel avec une réduction mais sans catégorie.
console.log(describeProduct("Tablet", 299, undefined, 15));
/* 
Sortie :
Product: Tablet
Category: General
Original Price: 299€
Discount: 15%
Final Price: 254.15€
*/
