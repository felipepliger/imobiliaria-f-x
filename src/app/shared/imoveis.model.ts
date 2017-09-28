export class Imoveis {
    public id: number
    public name: string
    public description: string
    public type: string
    public value: string
    public place: [{
        address: string
    }]
    public images: [{
        url: string
    }]
    public contact: string
}