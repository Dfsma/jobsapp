source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.7.1'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 6.0.3', '>= 6.0.3.4'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 4.1'
gem 'sass-rails', '>= 6'
gem 'webpacker', '~> 4.0'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.7'
gem 'redis', '~> 4.0'
gem 'image_processing', '~> 1.2'
gem 'bootsnap', '>= 1.4.2', require: false

#CUSTOM GEMS
gem 'devise', '~> 4.7', '>= 4.7.2'
gem 'friendly_id', '~> 5.3'
gem 'sidekiq', '~> 6.1', '>= 6.1.1'
gem 'name_of_person', '~> 1.1', '>= 1.1.1'

gem "stripe", "~> 5.28"
gem "stripe_event", "~> 2.3" # Stripe webhook integration for Rails applications.
gem "pay", "~> 2.2" # A Ruby on Rails subscription engine.

gem 'whenever', '~> 1.0' # Cron Jobs in Ruby
gem "pagy", "~> 3.9" # The ultimate pagination ruby gem
gem "inline_svg", "~> 1.7" # Get an SVG into your view and then style it with CSS.
gem "simple_discussion", "~> 1.2"



group :development, :test do
  gem 'annotate', '~> 3.1', '>= 3.1.1' # Annotate Rails classes with schema and routes info
  gem "faker", "~> 2.14" # A library for generating fake data such as names, addresses, and phone numbers.
  gem "pry-rails", "~> 0.3.9"
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  gem 'capybara', '>= 2.15'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end

gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]




