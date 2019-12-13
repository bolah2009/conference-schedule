# frozen_string_literal: true

class ConferencesController < ApplicationController
  skip_before_action :authorize_request, only: %i[index show]
  before_action :set_conference, only: %i[show update destroy]

  def index
    @conferences = Conference.all
    json_response(@conferences)
  end

  def show
    json_response(@conference)
  end

  private

  def set_conference
    @conference = Conference.find(params[:id])
  end
end
