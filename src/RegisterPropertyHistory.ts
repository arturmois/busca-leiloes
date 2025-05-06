import PropertyHistory from "./PropertyHistory";
import PropertyHistoryRepository from "./PropertyHistoryRepository";

export default class RegisterPropertyHistory {
    constructor(private propertyHistoryRepository: PropertyHistoryRepository) {
    }

    async execute(input: Input) {
        console.log(input);
        const propertyHistory = PropertyHistory.create(input.price, input.evaluationPrice, input.discount, input.saleMode, input.accessLink, input.propertyId);
        await this.propertyHistoryRepository.save(propertyHistory);
    }
}

type Input = {
    propertyId: string;
    price: number;
    evaluationPrice: number;
    discount: number;
    saleMode: string;
    accessLink: string;
}