import crypto from "crypto";

export default class PropertyHistory {
    private id: string;
    private price: number;
    private evaluationPrice: number;
    private discount: number;
    private saleMode: string;
    private accessLink: string;
    private propertyId: string;

    constructor(id: string, price: number, evaluationPrice: number, discount: number, saleMode: string, accessLink: string, propertyId: string) {
        this.id = id;
        this.price = price;
        this.evaluationPrice = evaluationPrice;
        this.discount = discount;
        this.saleMode = saleMode;
        this.accessLink = accessLink;
        this.propertyId = propertyId;
    }

    public static create(price: number, evaluationPrice: number, discount: number, saleMode: string, accessLink: string, propertyId: string) {
        const id = crypto.randomUUID();
        return new PropertyHistory(id, price, evaluationPrice, discount, saleMode, accessLink, propertyId);
    }

    public getId() {
        return this.id;
    }

    public getPrice() {
        return this.price;
    }

    public getEvaluationPrice() {
        return this.evaluationPrice;
    }

    public getDiscount() {
        return this.discount;
    }

    public getSaleMode() {
        return this.saleMode;
    }

    public getAccessLink() {
        return this.accessLink;
    }

    public getPropertyId() {
        return this.propertyId;
    }
}