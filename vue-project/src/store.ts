export interface Dog {
    name: string;
    age: number;
    breed?: string;
}
    
export function getGoodDogs(): Array<Dog> {
    return [
    { name: 'Sammy', age: 3 },
    { name: 'Roscoe', age: 2 , breed: 'Lab mix' },
    { name: 'Lucy', age: 5 },
    { name: 'Max', age: 1 , breed: 'Golden' },
    { name: 'Sammy', age: 3, breed: 'Terrier' },
    { name: 'Daisy', age: 4 , breed: 'Bulldog' },
    { name: 'Cupcake', age: 7 }
    ]
}