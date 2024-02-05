#!/bin/bash

# Exit on fail
set -e

# Bundle install
bundle install

# Start services
bundle exec sidekiq

# Finally call command issued to the docker service
exec "$@"
