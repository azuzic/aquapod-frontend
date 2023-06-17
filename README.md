# AquaPod Frontend

[![Aquapod Logo](https://i.imgur.com/d54NlOX.png)](https://your-aquapod-website-url)

AquaPod is an innovative project designed to address marine pollution by autonomously collecting waste from the sea. This repository contains the code for the frontend webpage of AquaPod.

## Getting Started

To run the site locally, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/aquapod-frontend.git
   ```

2. Navigate to the project directory:

   ```shell
   cd aquapod-frontend
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

4. Run the development server:

   ```shell
   npm run dev
   ```

   Alternatively, if you need to specify a host:

   ```shell
   npm run dev -- --host
   ```

5. Open your web browser and visit `localhost` to see the AquaPod frontend in action.

## Environment Variables

The following environment variable in `.env` file needs to be set:

- **VITE_MAPBOX_KEY**: This variable should be set to your Mapbox API key. You can obtain a key from the [Mapbox website](https://www.mapbox.com/).

And should look like:
``` shell
VITE_MAPBOX_KEY = "enter_key_here"
```

Please make sure to set the environment variable before running the development server.

## Additional Dependencies

The AquaPod frontend uses the following additional dependencies:

- ![Chart.js](https://img.shields.io/badge/-chart.js-FF6384?style=flat-square&logo=chart-dot-js&logoColor=white) Used for creating charts and visualizations.
- ![Mapbox GL](https://img.shields.io/badge/-mapbox--gl-000000?style=flat-square&logo=mapbox&logoColor=white) Used for displaying maps and integrating with Mapbox.
- ![Pinia](https://img.shields.io/badge/-pinia-4FC08D?style=flat-square&logo=vue-dot-js&logoColor=white) A Vue 3 store library for managing application state.
- ![Tailwind CSS](https://img.shields.io/badge/-tailwind--css-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) A utility-first CSS framework used for styling the frontend.

Make sure to install these dependencies by running `npm install` before starting the development server.

## Contributing

If you would like to contribute to AquaPod, feel free to open issues and submit pull requests. We welcome contributions from the community!

## License

The AquaPod frontend is released under the ![MIT License](https://img.shields.io/badge/License-MIT-blue.svg).
