# frozen_string_literal: true

class AgendasController < ApplicationController
  before_action :set_conference
  before_action :set_agenda, only: [:show]

  def index
    @agendas = @conference.agendas
    json_response(@agendas)
  end

  def show
    json_response(@agenda)
  end

  private

  def set_conference
    @conference = Conference.find(params[:conference_id])
  end

  def set_agenda
    @agenda = @conference.agendas.find_by!(id: params[:id]) if @conference
  end
end
