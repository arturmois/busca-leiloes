import Property from "../domain/Property";

export default interface PropertyRepository {
    save(property: Property): Promise<void>;
    findById(id: string): Promise<Property | null>;
    findByNumber(number: string): Promise<Property | null>;
}

export class PropertyRepositoryMemory implements PropertyRepository {
    private properties: Property[] = [];

    async save(property: Property): Promise<void> {
        this.properties.push(property);
    }

    async findById(id: string): Promise<Property | null> {
        return this.properties.find(property => property.getId() === id) || null;
    }

    async findByNumber(number: string): Promise<Property | null> {
        return this.properties.find(property => property.getNumber() === number) || null;
    }
}