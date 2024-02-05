class HelloWorldWorker
  include Sidekiq::Worker

  sidekiq_options queue: :default

  def perform(*args)
    puts 'Hello world'
  end
end
