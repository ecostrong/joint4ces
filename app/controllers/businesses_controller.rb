class BusinessesController < ApplicationController

    def index 
        businesses = Business.all 
        render json: businesses
    end

    def create
        business = Business.create(business_params)
        if business.valid?
            render json: business
        else
            render json: business.errors, status: :unprocessable_entity
        end
    end

    def update
        business = Business.find(params[:id])
        business.update(business_params)
        if business.valid?
            render json: business
        else
            render json: business.errors, status: :unprocessable_entity
        end
    end

    def destroy
        business = Business.find(params[:id])
        business.destroy
        if business.valid?
            render json: businesses
        else
            render json: business.errors, status: :unprocessable_entity
        end
    end

    private
    def business_params
        params.require(:business).permit(:param, :param, :param, :etc, :user_id)
    end
end