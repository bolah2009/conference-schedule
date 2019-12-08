# frozen_string_literal: true

User.create!(name: 'Bola Ahmed',
             email: 'bola@example.com',
             password: 'password',
             job_title: Faker::Job.title,
             password_confirmation: 'password')

50.times do |n|
  User.create!(name: Faker::Name.name,
               email: "user-#{n + 1}@example.com",
               password: 'password',
               job_title: Faker::Job.title,
               password_confirmation: 'password')
end

# conference
conferences = [
  {
    name: 'API Summit',
    url: 'https://api-summit.de/',
    startDate: Date.new(2019, 12, 9),
    endDate: Date.new(2019, 12, 11),
    city: 'Berlin',
    country: 'Germany'
  },
  {
    name: 'dotJS',
    url: 'https://2019.dotjs.io/',
    startDate: Date.new(2019, 12, 15),
    endDate: Date.new(2019, 12, 17),
    city: 'Paris',
    country: 'France'
  },
  {
    name: 'React Day Berlin',
    url: 'https://reactday.berlin/',
    startDate: Date.new(2019, 12, 16),
    endDate: Date.new(2019, 12, 18),
    city: 'Berlin',
    country: 'Germany'
  },
  {
    name: 'JSDay',
    url: 'https://2020.jsday.it/index.html',
    startDate: Date.new(2020, 2, 12),
    endDate: Date.new(2020, 2, 14),
    city: 'Verona',
    country: 'Italy'
  },
  {
    name: 'rubyday',
    url: 'https://2020.rubyday.it/',
    startDate: Date.new(2020, 3, 2),
    endDate: Date.new(2020, 3, 4),
    city: 'Verona',
    country: 'Italy'
  }
]
user = User.first
conferences.each { |conference| user.conferences.create!(conference) }

all_conferences = Conference.all

def create_agenda(agenda, conf, day, desc)
  case day
  when 0
    agenda.merge(desc, title: 'Opening Speech')
  when 1
    agenda.merge(desc, startTime: conf['startDate'].in(43200))
  when 2
    agenda.merge(desc, startTime: conf['startDate'].in(54_000))
  when 3
    agenda.merge(desc, startTime: conf['startDate'].advance(days: 1).in(32_400))
  when 4
    agenda.merge(desc, startTime: conf['startDate'].advance(days: 1).in(43200))
  when 5
    agenda.merge(desc, startTime: conf['startDate'].advance(days: 1).in(54_000))
  when 6
    agenda.merge(desc, startTime: conf['endDate'].in(32_400))
  when 7
    agenda.merge(desc, startTime: conf['endDate'].in(43200))
  when 8
    agenda.merge(desc, title: 'Closing Speech', startTime: conf['endDate'].in(54_000))
  end
end

def create_description
  {
    description: (Faker::Quote.matz + Faker::Movies::StarWars.quote + Faker::Quote.matz + Faker::Movies::StarWars.quote ),
    title: Faker::Lorem.sentence(word_count: 2)
  }
end

all_conferences.each do |conference|
  agenda = {
    startTime: conference['startDate'].in(32_400),
    location: ['Main Hall', 'Hall 1', 'Hall 2', 'Hall 3'][rand(4)]
  }
  9.times do |n|
    new_agenda = create_agenda(agenda, conference, n, create_description)
    rand_time = [5400, 7200, 9000][rand(3)]
    endTime = new_agenda[:startTime].in(rand_time)
    new_agenda.merge!({endTime: endTime})
    conference.agendas.create!(new_agenda)
  end
end

agendas = Agenda.all.take(10)
agendas.each do |agenda|
  user.schedules.create!(agenda_id: agenda.id)
end
