class HomeController < ApplicationController
  def index
    @jobs = Jobs.all
  end
end
