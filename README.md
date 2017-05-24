# teletraffic_viz

Visualize vitals (cpu, memory, disk usage) for telephony equipment,

### Example

TODO:
- show screenshot or gif here

### Features

TODO:
- show time filtering graph feature hear
- show table data feature here

### Tech Stack
Front-end:

  - React
  - Victory (for visualizations)
  - Radium (for inline, js object styling)

Back-end:

  - Node/Express
  - Mongoose (MongoDB ORM)
  - MongoDB (NoSQL db)

### DB Setup Instructions

- Download [MongoDB](https://docs.mongodb.com/manual/tutorial/)
- Create a mongo
  [config file](https://docs.mongodb.com/manual/administration/configuration/)
  (can set security info here such as only accepting local connections
   while developing)
- To start mongo, either run `mongod --config <path to mongo conf>` or run the
  shell script `turn_on_db.sh`
- With the db server running, you can populate the db with the python script
  `scripts/generate_mongo_data.py`. This requires the python dependencies
  listed in `requirements.txt`
- Note! The db server must be running while the application is running
