import { TravelDomainService } from "../../services/travelDomainService";
import { MockRepository } from "../persitence/mock/mockRepository";
import { TravelServiceContainer } from "./travelservicecontainer";

export async function bootStrap(){
    const repository = new MockRepository()
    const travelService = new TravelDomainService(repository)
    const travelServiceContainer = new TravelServiceContainer(travelService)
    console.log("iniciando aplicacion.");
    const response = await travelServiceContainer.create({
        id:"a1b2c3",
        origin:"centro",
        destination:"union.",
        passengerCount:24})
    console.log(response?.message)
    const travels = await travelServiceContainer.findall()
    console.log(travels)
    console.log(response)

    
}
bootStrap()
