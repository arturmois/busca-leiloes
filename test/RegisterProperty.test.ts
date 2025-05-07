import GetProperty from "../src/application/GetProperty";
import RegisterProperty from "../src/application/RegisterProperty";
import RegisterPropertyHistory from "../src/application/RegisterPropertyHistory";
import { PropertyHistoryRepositoryMemory } from "../src/infrastructure/PropertyHistoryRepository";
import { PropertyRepositoryMemory } from "../src/infrastructure/PropertyRepository";
import Mediator from "../src/infrastructure/Mediator";

let registerProperty: RegisterProperty;
let registerPropertyHistory: RegisterPropertyHistory;
let getProperty: GetProperty;
let mediator: Mediator;

beforeEach(() => {
    const propertyRepository = new PropertyRepositoryMemory();
    const propertyHistoryRepository = new PropertyHistoryRepositoryMemory();
    mediator = Mediator.getInstance();
    mediator.register("property.already_exists", async (event: any) => {
        await registerPropertyHistory.execute(event);
    });
    registerProperty = new RegisterProperty(propertyRepository, propertyHistoryRepository, mediator);
    registerPropertyHistory = new RegisterPropertyHistory(propertyHistoryRepository);
    getProperty = new GetProperty(propertyRepository);
})

test("Should register a property", async () => {
    const input = {
        number: "123",
        uf: "SP",
        city: "São Paulo",
        neighborhood: "Bairro",
        address: "Rua Teste",
        description: "Descrição do imóvel",
        price: 100000,
        evaluationPrice: 120000,
        discount: 20000,
        saleMode: "VENDA_DIRETA",
        accessLink: "https://www.google.com"
    }
    const output = await registerProperty.execute(input);
    const getPropertyOutput = await getProperty.execute(output.id);
    expect(getPropertyOutput.id).toBeDefined();
    expect(getPropertyOutput.number).toBe(input.number);
    expect(getPropertyOutput.uf).toBe(input.uf);
    expect(getPropertyOutput.city).toBe(input.city);
    expect(getPropertyOutput.neighborhood).toBe(input.neighborhood);
    expect(getPropertyOutput.address).toBe(input.address);
    expect(getPropertyOutput.description).toBe(input.description);
})