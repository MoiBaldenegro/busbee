import { Injectable } from "@nestjs/common";
import { Travel } from "../../domain/schemas/Travel";
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