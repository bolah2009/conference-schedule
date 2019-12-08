# frozen_string_literal: true

class AgendasController < ApplicationController
  before_action :set_conference
  before_action :set_agenda, only: %i[show update destroy]

  def index
    @agendas = @conference.agendas
    json_response(@agendas)
  end

  def create
    @conference.agendas.create!(agenda_params)
    json_response(@conference, :created)
  end

  def show
    json_response(@agenda)
  end

  def update
    @agenda.update(agenda_params)
    head :no_content
  end

  def destroy
    @agenda.destroy
    head :no_content
  end

  private

  def agenda_params
    params.permit(:title, :description, :startTime, :endTime, :location)
  end

  def set_conference
    @conference = Conference.find(params[:conference_id])
  end

  def set_agenda
    @agenda = @conference.agendas.find_by!(id: params[:id]) if @conference
  end
end
