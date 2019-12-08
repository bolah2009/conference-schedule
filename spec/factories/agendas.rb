# frozen_string_literal: true

FactoryBot.define do
  factory :agenda do
    title { Faker::Lorem.word }
    description { Faker::Lorem.sentence(word_count: 5) }
    startTime { Faker::Time.forward(days: 3, period: :all) }
    endTime { Faker::Time.forward(days: 3, period: :all) }
    location { Faker::Address.street_address }
    conference
  end
end
