#!/bin/bash

# Exit on fail
set -e

# Yarn install
yarn install

# Bundle install
bundle install

# Start services
vite dev

# Finally call command issued to the docker service
exec "$@"
