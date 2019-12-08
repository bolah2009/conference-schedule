# frozen_string_literal: true

class AgendaSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :startTime, :endTime, :location
end
