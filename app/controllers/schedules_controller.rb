# frozen_string_literal: true

class SchedulesController < ApplicationController
  def index
    @schedules = current_user.schedules
    json_response(@schedules)
  end

  def create
    current_user.schedules.create!(agenda_id: schedule_params[:agenda_id])
    @schedules = current_user.schedules
    json_response(@schedules, :created)
  end

  def destroy
    @schedule = current_user.schedules.find_by!(id: schedule_params[:id]) if current_user
    @schedule.destroy
    @schedules = current_user.schedules
    json_response(@schedules, :accepted)
  end

  private

  def schedule_params
    params.permit(:agenda_id, :id)
  end
end
