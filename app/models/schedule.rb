# frozen_string_literal: true

class Schedule < ApplicationRecord
  belongs_to :agenda, foreign_key: :agenda_id
  belongs_to :user, foreign_key: :user_id

  validates_presence_of :user_id, :agenda_id
  validates_uniqueness_of :agenda_id, scope: :user_id
end
