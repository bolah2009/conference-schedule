# frozen_string_literal: true

class Agenda < ApplicationRecord
  belongs_to :conference
  validates_presence_of :title, :description, :startTime, :endTime, :location
end
