# Smart Solar_WebApp_25-26J-527



A next-generation solar power monitoring system that leverages real-time data, machine learning, and an interactive web interface to optimize energy consumption and predict system failures.

🌍 **Deployed Webpage:** [smart.solaradvisor.site](https://smart.solaradvisor.site)

## ✨ Features

- 📊 **Real-Time Dashboard**: Visualize current solar generation, consumption, and grid status.
- 🤖 **AI-Powered Prediction**: Predict future power generation and potential faults using trained machine learning models.
- ⚡ **Smart Load Shifting**: Intelligently shift high-consumption tasks to times of peak solar generation.
- 🔔 **Instant Notifications**: Get alerts for critical events like grid failures or generation drops.
- 📱 **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Docker & Docker Compose (for backend services)

### Installation

1.  **Clone the repository**

    ```bash
    git clone <repository-url>
    cd SmartSolarA_WebApp_25-26J-527
    ```

2.  **Install dependencies**

    ```bash
    cd smart_solar
    npm install
    ```

### Running Locally

**Start the frontend development server**

```bash
cd smart_solar
npm run dev
```

    The application will be accessible at `http://localhost:8089`.

## 📂 Project Structure

```
smart_solar/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main pages (Dashboard, System, Settings)
│   └── App.tsx         # Main application component
├── public/             # Static assets
└── ...                 # Config files (vite, tailwind, etc.)
```

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite  
- **Styling**: Tailwind CSS, Lucide-React