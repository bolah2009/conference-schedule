# frozen_string_literal: true

class Conference < ApplicationRecord
  belongs_to :user, foreign_key: :creator_id
  has_many :agendas, dependent: :destroy

  validates_presence_of :name, :creator_id, :url, :startDate, :endDate, :city, :country
end
