import crypto from "crypto";

export default class Property {
    private id: string;
    private number: string;
    private uf: string;
    private city: string;
    private neighborhood: string;
    private address: string;
    private description: string;

    constructor(id: string, number: string, uf: string, city: string, neighborhood: string, address: string, description: string) {
        this.id = id;
        this.number = number;
        this.uf = uf;
        this.city = city;
        this.neighborhood = neighborhood;
        this.address = address;
        this.description = description;
    }

    public static create(number: string, uf: string, city: string, neighborhood: string, address: string, description: string) {
        const id = crypto.randomUUID();
        return new Property(id, number, uf, city, neighborhood, address, description);
    }

    public getId() {
        return this.id;
    }

    public getNumber() {
        return this.number;
    }

    public getUf() {
        return this.uf;
    }

    public getCity() {
        return this.city;
    }

    public getNeighborhood() {
        return this.neighborhood;
    }

    public getAddress() {
        return this.address;
    }

    public getDescription() {
        return this.description;
    }
}