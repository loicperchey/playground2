import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private _products = [
    {id: 1, name: 'Voiture' },
    {id: 2, name : 'Avion'},
    {id: 3, name : 'Bateau'},
  ];

  private _selectedProductId : number | null = null;

  get products() {
    return this._products.map((product: any) =>{
      return {...product};
    });
  }

  get selectedProduct(){
    return{
      ...this.products.find(
        (product) => product.id === this._selectedProductId
      ),
    };
  }

  selectProduct(productId : number){
    this._selectedProductId = productId;
  }

}
