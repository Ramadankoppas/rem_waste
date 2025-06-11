REM Waste Skip Selector Application
This document outlines a React-based application designed to facilitate the selection of skip sizes for waste management purposes. The application provides a user-friendly interface for browsing available skip dimensions, obtaining relevant pricing and rental period information, and determining suitability for road placement.

Core Functionality
Dynamic Inventory Presentation: The application retrieves and displays skip size data from an external API, presenting it in an organized and interactive list format.

Intuitive Selection Mechanism: Users are able to select or deselect skip items through a simple click interaction.

Visual User Feedback:

Upon hovering over a skip, an indicator appears, displaying "Selected" (signifying availability and selection status) or "Road Placement Not Available" (indicating a restriction).

Selected skips are visually highlighted with a distinct green border.

Comprehensive Information Display: Once a skip is selected, a dedicated section at the bottom of the interface populates with detailed information, including the skip's dimensions, pricing structure, and the designated rental period.

Road Placement Verification: The system clearly communicates whether a particular skip is permissible for placement on public roadways.

Confirmation Protocol: Activation of the "Continue" button initiates a "Task Done" confirmation message, which includes relevant contact information for further inquiries.

Local Deployment Guide
To deploy and execute this application within a local development environment, please adhere to the following instructions:

Prerequisites: Ensure that Node.js and npm (Node Package Manager) are installed on your system.

File Acquisition: Obtain all project files and ensure they are systematically organized within a designated directory.

Dependency Installation: Navigate to the project's root directory (where package.json resides) via your terminal or command prompt and execute the following command:

npm install

This command will install all requisite React and associated dependencies.

API Integration (ApiClass.js):
The application relies on an ApiClass.js file, which must contain a getDataFromServer() method for data retrieval. This file should be located in the same directory as App.js and configured to accurately fetch skip data. A foundational example is provided below for reference:

Cascading Style Sheets (App.css):
Verify the presence of an App.css file within the same directory as App.js. This file should contain all necessary CSS rules for the elements utilized in App.js (e.g., .App, .title, .ItemSize, .selectView, .notAllow).

Initiating the Development Server:
Subsequent to the successful installation of dependencies and configuration of ApiClass.js, initiate the application by executing the following command in your terminal:

npm start

The application will then become accessible in your web browser, typically at http://localhost:3000.

Project Architecture
├── public/              // Contains publicly accessible assets, including the main HTML entry point.
│   └── index.html
│   └── ...
├── src/                 // Encompasses the primary source code for the application.
│   ├── App.js           // The central React component responsible for skip selection logic and rendering.
│   ├── App.css          // Defines the styling rules for the App component.
│   ├── ApiClass.js      // Manages data retrieval operations from external sources.
│   └── index.js         // The initial entry point for the React application.
├── package.json         // Lists project metadata and dependencies.
├── package-lock.json    // Records the exact dependency tree used.
└── README.md            // This comprehensive documentation file.

Operational Instructions
Upon application launch, a curated list of available skip sizes will be displayed.

Hover the mouse pointer over an individual skip item to ascertain its selection status.

Click on a skip item to effect its selection.

If the selected skip is permissible for road placement, its comprehensive details (size, price, rental duration) will be presented in the lower section of the interface. Subsequently, the "Continue" button may be engaged.

Conversely, if the skip is not authorized for road placement, a notification stating "Road Placement Not Available" will be displayed in the lower section.

Re-clicking an already selected skip will deselect it, concurrently concealing the detailed information section.

Activating the "Continue" button (applicable to road-allowed skips) will trigger a "Task Done" confirmation dialogue.

Contact Information
For any inquiries or further assistance, please utilize the following contact details:

Email: ramadankoppas400@gmail.com

Whatsapp: +966583757003

