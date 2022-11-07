import { MongoDataSource } from "apollo-datasource-mongodb";

export default class Countries extends MongoDataSource{
    async getCountries(){
        return await this.model.find()
    }
}