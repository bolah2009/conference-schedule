# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    name { Faker::Name.name }
    email { Faker::Name.name }
    job_title { Faker::Job.title }
    password { Faker::Name.name }
    password_confirmation { password }
  end
end
