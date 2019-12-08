# frozen_string_literal: true

class ConferencesController < ApplicationController
  before_action :set_conference, only: %i[show update destroy]

  # GET /conferences
  def index
    @conferences = Conference.all
    json_response(@conferences)
  end

  # POST /conferences
  def create
    @conference = current_user.conferences.create!(conference_params)
    json_response(@conference, :created)
  end

  # GET /conferences/:id
  def show
    json_response(@conference)
  end

  # PUT /conferences/:id
  def update
    @conference.update(conference_params)
    head :no_content
  end

  # DELETE /conferences/:id
  def destroy
    @conference.destroy
    head :no_content
  end

  private

  def conference_params
    params.permit(:name, :creator_id, :url, :startDate, :endDate, :city, :country)
  end

  def set_conference
    @conference = Conference.find(params[:id])
  end
end
