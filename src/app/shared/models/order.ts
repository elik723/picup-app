export class Order {

    private id: Number;
    private is_round_trip: Boolean;
    private date_created: String;
    private date_scheduled: String;
    private user_id: Number;
    private merchant_id: Number;
    private parcel_size: String;
    private num_parcels: Number;

    constructor (id, is_round_trip, date_created, date_scheduled, 
        user_id, merchant_id, parcel_size, num_parcels) {

    }

}
