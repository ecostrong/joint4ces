# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# require 'rails_helper'

# RSpec.describe "Businesses", type: :request do
# describe "GET /index" do
# it 'returns a list of businesses' do

# user = User.where(email: 'test@test.test').first_or_create(password: '12345678', password_confirmation: '12345678')

# user.businesses.create(
#   business_name: string,
#   business_description: string,
#   business_email_address: string,
#   business_mailing_address: string,
#   business_phone_number: string, 
#   business_logo: text, 
#   business_url: string, 
#   business_status: boolean, 
# )

# get '/businesses'

# businesses = JSON.parse(response.body)
# expect(response).to have_http_status(200)
# expect(businesses.length).to eq(1)
# end