# frozen_string_literal: true

class User < ApplicationRecord
  before_save { self.email = email.downcase }
  has_secure_password

  has_many :conferences, foreign_key: :creator_id, dependent: :destroy
  has_many :schedules, foreign_key: :user_id, dependent: :destroy

  validates_presence_of :name, :email, :job_title, :password_digest
  validates :email, length: { maximum: 255 },
                    uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 6 }

  class << self
    def find_by_email(email)
      where(email: email)
        .select(:id, :name, :email, :job_title).take!
    end
  end
end
