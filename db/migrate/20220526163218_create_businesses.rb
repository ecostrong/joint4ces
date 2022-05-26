class CreateBusinesses < ActiveRecord::Migration[7.0]
  def change
    create_table :businesses do |t|
      t.string :business_name
      t.string :business_description
      t.string :business_email_address
      t.string :business_mailing_address
      t.string :business_phone_number
      t.text :business_logo
      t.text :business_url
      t.string :business_status
      t.integer :user_id

      t.timestamps
    end
  end
end
