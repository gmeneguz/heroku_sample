#!/bin/sh


PROJECT_NAME=heroku-sample-2021-09
# 1 - Create App in Heroku
heroku apps:create -a $PROJECT_NAME

# - Set Heroku remote
heroku git:remote -a heroku-sample-2021-09
# 2 - Create PG Database Addon -> available at env var DATABASE_URL
heroku addons:create heroku-postgresql:hobby-dev -a $PROJECT_NAME
# 3 - Skip SSL verification for DB connection
heroku config:set PGSSLMODE=require -a $PROJECT_NAME



