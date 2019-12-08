# frozen_string_literal: true

class Schedule < ApplicationRecord
  belongs_to :agenda, foreign_key: :agenda_id, dependent: :destroy
  belongs_to :user, foreign_key: :user_id, dependent: :destroy

  validates_presence_of :user_id, :agenda_id
  validates_uniqueness_of :agenda_id

  class << self
    def take_agendas
      select(:agenda_id)
        .inject([]) { |memo, current| memo << current[:agenda_id] }
    end
  end
end
