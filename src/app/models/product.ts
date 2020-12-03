export class Product {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public photo: string,
        public weight: number,
        public price: number,
        public isEnabled: boolean,
        public category: {},
        public ingredients: any[]
    ) { }
}
