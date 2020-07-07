Rails.application.routes.draw do
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :mappings
      resources :questions
    end
  end

  get '*path', to: 'pages#index', via: :all
end
