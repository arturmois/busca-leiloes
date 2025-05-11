import PropertyHistory from "../domain/PropertyHistory";
export default interface PropertyHistoryRepository {
    save(propertyHistory: PropertyHistory): Promise<void>;
    findByPropertyId(propertyId: string): Promise<PropertyHistory[]>;
}

export class PropertyHistoryRepositoryMemory implements PropertyHistoryRepository {
    private properties: PropertyHistory[] = [];

    async save(propertyHistory: PropertyHistory): Promise<void> {
        this.properties.push(propertyHistory);
    }

    async findByPropertyId(propertyId: string): Promise<PropertyHistory[]> {
        return this.properties.filter(propertyHistory => propertyHistory.getPropertyId() === propertyId);
    }

}