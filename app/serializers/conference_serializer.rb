# frozen_string_literal: true

class ConferenceSerializer < ActiveModel::Serializer
  # attributes to be serialized
  attributes :id, :name, :creator_id, :url, :startDate, :endDate, :city, :country
  # model association
  has_many :agendas
end
