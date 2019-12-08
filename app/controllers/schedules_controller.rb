# frozen_string_literal: true

class SchedulesController < ApplicationController
  # POST /scheduless
  def create
    current_user.schedules.create!(schedule_params)
    @schedules = current_user.schedules.take_agendas
    json_response(@schedules, :created)
  end

  def show
    @schedules = current_user.schedules.take_agendas
    json_response(@schedules)
  end

  private

  def schedule_params
    params.permit(:agenda_id)
  end
end
