import { Injectable } from "@nestjs/common";

@Injectable()
export class CustomerService {
    getCustomers(): string[] {
        return ["Fred", "George"];
    }
}