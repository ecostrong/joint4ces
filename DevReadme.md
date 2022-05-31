



CRUD ACTION TESTING:

business.update(business_name:"New Business Name")

business = Business.find(1)

business.destroy

Business.create business_name: "Test Business", business_description: "The Business Description", business_email_address: "Business email address", business_mailing_address: "business mailing address", business_phone_number: "Business phone number", business_logo: "www.google.com", business_url: "www.google.com", business_status: "Business Status", user_id: 1