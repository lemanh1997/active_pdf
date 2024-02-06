Rails.application.routes.draw do
  get "up" => "rails/health#show", as: :rails_health_check

  mount Sidekiq::Web => "/sidekiq"

  # Devise exists
  # authenticate :user, lambda { |u| u.admin? } do
  #   mount Sidekiq::Web => '/sidekiq'
  # end

  # Defines the root path route ("/")
  root to: "application#website"

  get "/panel(/*path)", to: "application#panel", as: :panel
  get "/(*path)", to: "application#website", as: :website
end
