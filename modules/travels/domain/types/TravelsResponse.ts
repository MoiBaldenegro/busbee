import { Travel } from "../schemas/travel.schema"

export interface TravelResponse{
    message:String
    succes:boolean
    travel:Travel
}