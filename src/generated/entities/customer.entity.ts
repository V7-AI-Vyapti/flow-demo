import { CustomTypeormEntityBase, CustomTypeormFields } from '@vyapti/core';
export class Customer extends CustomTypeormEntityBase {
    static tableName = 'customer';
    customer_id = CustomTypeormFields.AutoPK({ db_column: 'customer_id' });
    customer_name = CustomTypeormFields.CharacterString({
        db_column: 'customer_name',
    });
    deleted_at = CustomTypeormFields.Integer({
        db_column: 'deleted_at',
        null: true,
    });
}
