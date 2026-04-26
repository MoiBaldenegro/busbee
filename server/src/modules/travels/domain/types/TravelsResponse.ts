import { Travel } from "../schemas/Travel"

export interface TravelResponse{
    message:String
    succes:boolean
    travel:Travel
}