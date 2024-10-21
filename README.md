# Countries and Cities Management System

## Overview
This project is designed to manage countries and their associated cities with full CRUD functionality. Redis is used for caching in the controllers to improve performance by reducing database queries.

## Features

### Country Management
- **Country Routes**:
  - `/countries`: Get a list of all countries (caches results using Redis).
  - `/countries/:id`: Get details of a country by its ID (caches the result).
  - `/countries`: Create a new country.
  - `/countries/:id`: Update a country by its ID.
  - `/countries/:id`: Delete a country by its ID.

### City Management
- **City Routes**:
  - `/cities`: Get a list of all cities (caches results using Redis).
  - `/cities/:id`: Get details of a city by its ID (caches the result).
  - `/cities`: Create a new city.
  - `/cities/:id`: Update a city by its ID.
  - `/cities/:id`: Delete a city by its ID.

## Redis Caching
- The project uses Redis to cache responses for fetching all countries, cities, and individual country or city details.
- Cached data is invalidated when a country or city is created, updated, or deleted.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/countries-cities-management-system.git
   cd countries-cities-management-system
