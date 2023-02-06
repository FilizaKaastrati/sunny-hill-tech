import {Component, OnInit} from '@angular/core';
import {Product, ProductApiService} from "./product-api.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductFormDialogComponent} from "./product-form-dialog/product-form-dialog.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public constructor(private productApiService: ProductApiService, public dialog: MatDialog) {
  }

  public displayedColumns: any = ['id', 'name', 'category', 'price', 'date', 'actions']
  public productList: Product[] = [];

  ngOnInit() {
    this.listProducts()
  }

  listProducts() {
    this.productApiService.list().subscribe((result) => {
      this.productList = result
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      data: {},
      height: '500px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.listProducts()
    });
  }

  editProduct(product: Product): void {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      data: product,
      height: '500px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.listProducts()
    });
  }

  deleteProduct(id: Number) {
    this.productApiService.delete(id).subscribe(() => {
      this.listProducts();
    });
  }
}
