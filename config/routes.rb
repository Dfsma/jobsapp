require 'sidekiq/web'

Rails.application.routes.draw do
  resources :jobs
  
  authenticate :user, lambda { |u| u.admin? } do
    mount Sidekiq::Web => '/sidekiq'
  end

  mount SimpleDiscussion::Engine => "/forum"


  devise_for :users
  root to: 'jobs#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
