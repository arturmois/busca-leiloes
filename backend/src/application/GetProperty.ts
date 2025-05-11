import PropertyRepository from "../infrastructure/PropertyRepository";

export default class GetProperty {
    private propertyRepository: PropertyRepository;

    constructor(propertyRepository: PropertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    async execute(id: string): Promise<Output> {
        const property = await this.propertyRepository.findById(id);
        if (!property) {
            throw new Error("Property not found");
        }
        return {
            id: property.getId(),
            number: property.getNumber(),
            uf: property.getUf(),
            city: property.getCity(),
            neighborhood: property.getNeighborhood(),
            address: property.getAddress(),
            description: property.getDescription()
        }
    }
}

type Output = {
    id: string;
    number: string;
    uf: string;
    city: string;
    neighborhood: string;
    address: string;
    description: string;
}