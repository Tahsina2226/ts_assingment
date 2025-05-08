function formatString(input: string, toUpper: boolean = true): string {
    if (toUpper) {
      return input.toUpperCase();
    } else {
      return input.toLowerCase();
    }
  }
  
  function filterBooksByRating(
    books: { title: string; rating: number }[]
  ): { title: string; rating: number }[] {
    let filteredBooks = [];
  
    for (let i = 0; i < books.length; i++) {
      if (books[i].rating >= 4) {
        filteredBooks.push(books[i]);
      }
    }
  
    return filteredBooks;
  }
  
  function mergeArrays<T>(...arrays: T[][]): T[] {
    return arrays.reduce((acc, curr) => acc.concat(curr), []);
  }
  
  class Vehicle {
    constructor(private make: string, private year: number) {}
  
    getInfo(): string {
      return `Make: ${this.make}, Year: ${this.year}`;
    }
  }
  
  class Car extends Vehicle {
    constructor(make: string, year: number, private model: string) {
      super(make, year);
    }
  
    getModel(): string {
      return `Model: ${this.model}`;
    }
  }
  
  function calculateValue(value: string | number): number {
    if (typeof value === "string") {
      return value.length;
    } else {
      return value * 2;
    }
  }
  
  interface Product {
    name: string;
    price: number;
  }
  
  function findMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;
  
    let mostExpensiveProduct = products[0];
  
    for (let i = 1; i < products.length; i++) {
      if (products[i].price > mostExpensiveProduct.price) {
        mostExpensiveProduct = products[i];
      }
    }
  
    return mostExpensiveProduct;
  }
  
  enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  function determineDayType(day: DayOfWeek): string {
    if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
      return "Weekend";
    } else {
      return "Weekday";
    }
  }
  
  async function calculateSquare(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject("Negative number not allowed");
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }
  