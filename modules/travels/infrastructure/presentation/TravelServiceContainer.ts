import { Travel } from "../../domain/schemas/travel.schema";
import { TravelService } from "../../services/travel.service";

export class TravelServiceContainer {
    constructor(private service:TravelService){

    }
    create(data:Partial<Travel>){
        return this.service.createTravel(data)
    }
    findall(){
        return this.service.listTravels()
    }
    
}