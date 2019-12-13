Rails.application.routes.draw do
  resources :conferences, only: [:index, :show] do
    resources :agendas, only: [:index, :show]
  end

  resources :schedules, only: [:index, :create, :destroy]

  post 'signup', to: 'users#create'
  post 'login', to: 'authentication#authenticate'

  get '*path', to: "authentication#fallback_index_html"
end