import {AutoCrud} from "@vaadin/hilla-react-crud";
import {PersonService} from "Frontend/generated/endpoints";
import PersonModel from "Frontend/generated/ma/enset/ensetchatbotrag/PersonModel";


export default function PersonPage() {
    return <AutoCrud model={PersonModel} service={PersonService}></AutoCrud>
}