# frozen_string_literal: true

FactoryBot.define do
  factory :conference do
    name { Faker::Lorem.word }
    url { Faker::Internet.url }
    startDate { Faker::Date.forward(days: 23) }
    endDate { Faker::Date.forward(days: 23) }
    city { Faker::Address.city }
    country { Faker::Address.country }
    user
  end
end
