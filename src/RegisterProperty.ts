import Mediator from "./Mediator";
import Property from "./Property";
import PropertyHistory from "./PropertyHistory";
import PropertyHistoryRepository from "./PropertyHistoryRepository";
import PropertyRepository from "./PropertyRepository";

export default class RegisterProperty {
    private propertyRepository: PropertyRepository;
    private propertyHistoryRepository: PropertyHistoryRepository;
    private mediator: Mediator;

    constructor(propertyRepository: PropertyRepository, propertyHistoryRepository: PropertyHistoryRepository, mediator: Mediator) {
        this.propertyRepository = propertyRepository;
        this.propertyHistoryRepository = propertyHistoryRepository;
        this.mediator = mediator;
    }

    async execute(input: Input) {
        const property = Property.create(input.number, input.uf, input.city, input.neighborhood, input.address, input.description);
        const propertyHistory = PropertyHistory.create(input.price, input.evaluationPrice, input.discount, input.saleMode, input.accessLink, property.getId());
        const existingProperty = await this.propertyRepository.findByNumber(input.number);
        if (existingProperty) {
            this.mediator.notify("property.already_exists", propertyHistory);
            return {
                id: existingProperty.getId()
            }
        }
        await this.propertyRepository.save(property);
        await this.propertyHistoryRepository.save(propertyHistory);
        this.mediator.notify("property.registered", property);
        return {
            id: property.getId()
        }
    }
}

type Input = {
    number: string;
    uf: string;
    city: string;
    neighborhood: string;
    address: string;
    description: string;
    price: number;
    evaluationPrice: number;
    discount: number;
    saleMode: string;
    accessLink: string;
}