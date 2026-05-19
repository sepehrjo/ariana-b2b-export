# Ariana Global Trade - B2B Export Platform

This repository contains the source code for the Ariana Global Trade B2B export website, a modern, multi-language platform built with Next.js. It is designed for a premium Iranian agricultural commodities supplier specializing in saffron, pistachios, dates, and other specialty goods.

**Status**: Production Ready  
**Last Updated**: May 19, 2026

---

## Overview

The Ariana Global Trade website is a next-generation B2B export platform designed to connect with global importers. Its primary functions are to generate qualified leads, provide instant pricing information, and build trust with potential clients through a professional and informative interface.

The platform supports three languages (English, Persian, and Armenian) and is fully responsive to adapt to all devices.

## Key Features

*   **Multi-Language Support**: The interface is fully translated into English, Persian (with RTL support), and Armenian. The system detects the user's preferred language and allows for manual switching, with the choice persisted in local storage.

*   **Intelligent Quote System**: An integrated chatbot provides instant price calculations. It uses natural language processing to understand inquiries about products and quantities (e.g., "What is the price for 500kg of saffron?"). The system automatically applies volume-based discounts and provides shipping estimates.

*   **Dynamic Product Pages**: The site includes detailed pages for seven core products. These pages are pre-rendered for fast loading and include technical specifications, certification details, packaging options, and clear calls-to-action.

*   **Lead Capture System**: A professional, bilingual form captures leads from potential clients. Submissions are validated and stored in a simple JSONL format, which is ready for integration with a CRM like HubSpot or Salesforce.

*   **Trust and Authority Signals**: The website prominently displays ISO certifications (ISO 22000, ISO 3632), GlobalG.A.P., and other quality assurances. It also showcases key business metrics, such as the number of partners, volume exported, and supply chain traceability.

*   **AI-Powered Chatbot**: A chatbot provides immediate answers to common questions using a local knowledge base. For more complex queries, it can fall back to the OpenAI API. It understands multiple languages and is designed to detect and respond to pricing requests.

---

## Technical Stack

*   **Framework**: Next.js 16.2.6 (App Router) with React 19 and TypeScript
*   **Styling**: Tailwind CSS with a custom design system, using Framer Motion for animations and Shadcn UI for components.
*   **Backend**: Next.js API routes handle chat and lead capture. An optional integration with the OpenAI API provides advanced chat capabilities. Lead data is stored in a local JSONL file.

---

## Getting Started

### Prerequisites

*   Node.js version 18 or higher
*   npm or yarn package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/sepehrjo/ariana-b2b-export.git
    cd ariana-b2b-export
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables (Optional):**
    If you plan to use the OpenAI API for the chatbot, create a `.env.local` file and add your API key:
    ```
    OPENAI_API_KEY=your_key_here
    ```

### Running the Application

*   **Development:**
    To run the development server:
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

*   **Production:**
    To build and run the application for production:
    ```bash
    npm run build
    npm run start
    ```

---

## Customization

The platform is designed to be easily customized:

*   **Branding**: Colors can be modified in `tailwind.config.ts`, and fonts are managed in `app/layout.tsx`.
*   **Content**: Product information is stored in `lib/products.ts`, pricing logic is in `lib/chatbot/pricing.ts`, and all text translations are in `lib/i18n.tsx`.
*   **Contact**: The primary sales email address can be updated in `components/product-detail.tsx`.

---

## Deployment

### Vercel (Recommended)
The project is optimized for deployment on Vercel. Simply connect your GitHub repository to a Vercel project, and it will be deployed automatically on every push to the `main` branch.

### Docker
A `Dockerfile` is included for building and deploying the application as a container:
```bash
docker build -t ariana-b2b .
docker run -p 3000:3000 ariana-b2b
```

---
