# Career Guidance System

## Overview
The **Career Guidance System** is an intelligent platform designed to help users explore potential career paths based on their interests, skills, and preferences. Built with **React, Tailwind CSS, JSX, and Vite**, the system combines a user-friendly questionnaire with a chatbot interface to provide **personalized career recommendations**. After analyzing the user's responses, the system suggests relevant domains and resources for further exploration and learning.

## Features

- **Questionnaire:** A dynamic and interactive questionnaire to assess the user's interests, skills, personality traits, and career preferences.
- **Chatbot Integration:** A conversational AI chatbot that interacts with users, processes their questionnaire responses, and provides tailored career advice.
- **Domain Recommendations:** Based on the user's inputs, the system suggests relevant career domains and fields of study.
- **Learning Resources:** Curated resources (articles, courses, videos, etc.) to help users learn more about the recommended domains.
- **Responsive Design:** A mobile-first, responsive UI built with **Tailwind CSS** for seamless user experience across devices.
- **Fast Development:** Built with **Vite** for lightning-fast development and optimized production builds.

## Tech Stack

- **Frontend:** React, JSX
- **Styling:** Tailwind CSS
- **Build Tool:** Vite
- **State Management:** React Context API or Redux (optional)
- **Chatbot Integration:** API-based (e.g., OpenAI, Dialogflow,botpress and custom backend)

## Installation

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm**

### Steps

#### 1. Clone the Repository:
```sh
git clone https://github.com/yourusername/career-guidance-system.git
cd career-guidance-system
```

#### 2. Install Dependencies:
```sh
npm install
```

#### 3. Set Up Environment Variables:
Create a `.env` file in the root directory and add the necessary environment variables (e.g., API keys for the chatbot).

```
VITE_CHATBOT_API_KEY=your_api_key_here
```

#### 4. Run the Development Server:
```sh
npm run dev
```

#### 5. Access the Application:
Open your web browser and navigate to **[http://localhost:5173](http://localhost:5173)**.

## Usage

1. **Home Page:** Users land on the home page, where they can start the questionnaire or log in to view previous results.
2. **Questionnaire:** Users answer a series of questions designed to gauge their interests, skills, and career aspirations.
3. **Chatbot Interaction:** The chatbot analyzes the responses and engages in a conversation to clarify any ambiguities or gather additional information.
4. **Recommendation Page:** The system processes the data and generates a list of recommended career domains.
5. **Resource Page:** Users are provided with links to relevant learning resources to explore the suggested domains further.

## Customization

- **Tailwind CSS:** Customize the design by editing the `tailwind.config.js` file.
- **Chatbot:** Replace the chatbot API key in the `.env` file with your preferred service (e.g., OpenAI, Dialogflow).
- **Questionnaire:** Modify the questions in `src/pages/Questionnaire.jsx` to suit your needs.

## Running Locally
To run the application locally, follow these steps:

#### Start the Development Server:
```sh
npm run dev
```

#### Access the Application:
Open your browser and go to **[http://localhost:5173](http://localhost:5173)**.

## Build for Production (Optional)
If you want to build the application for production, run:

```sh
npm run build
```

This will generate a `dist` folder containing the optimized production build. You can serve it locally using a static server like `serve`:

```sh
npx serve dist
```

## Contributing
We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. **Fork** the repository.
2. **Create a new branch** for your feature or bug fix.
3. **Commit** your changes and push the branch to your fork.
4. **Submit a pull request** with a detailed description of your changes.

## License
This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

## Acknowledgments
Special thanks to:
- All the contributors who have helped improve this project.
- The open-source community for providing valuable resources and tools.
