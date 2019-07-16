export class Merchant {

    private name: string;
    private id: number;
    private address: string;
    private cell_phone_number: string;
    private email: string;

    constructor(name, id, address, cell_phone_number, email){

        this.name = name;
        this.id = id;
        this.address = address;
        this.cell_phone_number = cell_phone_number;
        this.email = email;
    }
   
    public get merchant_name(): string{
        return this.name;
    }
    
    public set merchant_name(value: string ){ 
        this.name;
    }

    public get merchant_id(): sumber{
        return this.id;
    }
    
    public set merchant_id(value: sumber ){ 
        this.id;
    }

    public get merchant_address(): string{
        return this.address;
    }
    
    public set merchant_address(value: string ){ 
        this.address;
    }

    public get merchant_cell_phone_number(): string{
        return this.cell_phone_number;
    }
    
    public set merchant_cell_phone_number(value: string ){ 
        this.cell_phone_number;
    }

    public get merchant_email(): string{
        return this.email;
    }
    
    public set merchant_email(value: string ){ 
        this.email;
    }

}
