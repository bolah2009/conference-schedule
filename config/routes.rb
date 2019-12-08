Rails.application.routes.draw do
  resources :conferences do
    resources :agendas
  end

  post 'schedules/new', to: 'schedules#create'
  get 'schedules', to: 'schedules#show'
  post 'signup', to: 'users#create'
  post 'login', to: 'authentication#authenticate'
end