#!/bin/bash

# Exit on fail
set -e

# Bundle install
bundle install

# Remove puma pid if existed
rm -f tmp/pids/server.pid

# Start services
rails server -b 0.0.0.0 -p 3000

# Finally call command issued to the docker service
exec "$@"