# frozen_string_literal: true

class Conference < ApplicationRecord
  has_many :agendas, dependent: :destroy
  validates_presence_of :name, :creator_id, :url, :startDate, :endDate, :city, :country
end
