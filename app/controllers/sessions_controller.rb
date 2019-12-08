# frozen_string_literal: true

class SessionsController < ApplicationController
  before_action :set_conference
  before_action :set_session, only: %i[show update destroy]

  def index
    @sessions = @conference.sessions
    json_response(@sessions)
  end

  def create
    @conference.sessions.create!(session_params)
    json_response(@conference, :created)
  end

  def show
    json_response(@session)
  end

  def update
    @session.update(session_params)
    head :no_content
  end

  def destroy
    @session.destroy
    head :no_content
  end

  private

  def session_params
    params.permit(:title, :description, :time, :location)
  end

  def set_conference
    @conference = Conference.find(params[:conference_id])
  end

  def set_session
    @session = @conference.sessions.find_by!(id: params[:id]) if @conference
  end
end
