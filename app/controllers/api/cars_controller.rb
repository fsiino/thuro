class Api::CarsController < ApplicationController

  before_action :require_logged_in, only: [:create]

  def index
    @cars = Car.all
    render :index
  end

  def create
    @car = Car.new(car_params)
    if @car.save
      # render "api/cars/show"
      # render "api/cars"
      render :index
    else
      render json: @car.errors.full_messages, status: 422
    end
  end
  
  def show
    @car = Car.find(params[:id])
    render :show
  end

  def destroy
    @car = Car.find(params[:id])
    @car.destroy
    render "api/cars/show"
  end

  def car_params
    params.require(:car).permit(
      :rate, 
      :make, 
      :model, 
      :year, 
      :color, 
      :transmission, 
      :seats, 
      :description, 
      :plate, 
      :address, 
      :city, 
      :state, 
      :zip
      # :lat,
      # :lng,
      # photos: []
    )
  end


end
