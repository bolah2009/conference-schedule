# frozen_string_literal: true

class Agenda < ApplicationRecord
  belongs_to :conference
  has_one :schedule, foreign_key: :agenda_id, dependent: :destroy

  validates_presence_of :title, :description, :startTime, :endTime, :location
end
