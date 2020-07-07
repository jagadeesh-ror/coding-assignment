Rails.application.routes.draw do
  devise_for :users
  root 'pages#index'
  get 'import_csv' => "pages#import_csv"
  post 'submit_csv' => "pages#submit_csv"

  namespace :api do
    namespace :v1 do
      resources :mappings
      resources :questions
    end
  end

  get '*path', to: 'pages#index', via: :all
end
