# Project Setup & Usage

Follow these steps to set up and run the project.

## Clone the Project

Clone this project to your local machine using the following command:

```sh
git clone https://github.com/adtjha/your-project.git
```

## Install Dependencies

Navigate to the project directory and install the required dependencies:

```sh
cd your-project
npm install
```

## Run Development Server

Start the development server to run the project:

```sh
npm run start
```

## Access the App

Open your web browser and go to http://localhost:3000 to access the app.

# How It Works

The application provides a contact management system along with maps and charts for COVID-19 data visualization.

## Contact Management

1. Creating a contact triggers the addContact action with the required details.
2. The new contact's details are added to the Redux store.
3. Updating and deleting contacts are handled in a similar manner.

## Charts and Maps

1. React Query is used to query APIs and manage queries effectively.
2. The Plot library is utilized for rendering charts.
3. `react-leaflet` and the original `leaflet` library are used to display a map with markers on each country. The markers show COVID-19 data for that country.

# What's Included

1. A fully functional contact management app with integrated maps and charts.
2. Codebase with proper comments for better understanding.
3. Documentation explaining how to run the app and details about the used API endpoints.
