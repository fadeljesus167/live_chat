Rails.application.routes.draw do
  resources :users
  namespace :authentication do
    resources :sessions, only: %w[create destroy]
  end
end
