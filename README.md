# Mehedi Hasan


# TripBooking.AI

A modern, responsive travel booking landing page built with **Next.js 16**, **React 19**, and **Tailwind CSS v4**. The UI showcases AI-powered travel deal discovery with sections for tour browsing, hotel search, popular destinations, and more.

---

##  Features Implemented

###  Navigation
- Responsive navbar with active-link highlighting using `usePathname`
- Links to Home, Tours, Hotels, Blog, About, and Contact pages
- Hamburger menu for mobile with smooth open/close animation
- Search and Sign In action buttons

###  Hero Section
- Full-screen background image with overlay
- "Explore the world" badge with globe icon
- Headline and subtitle copy
- **Search Form** overlapping the hero — supports tabbed switching between **Tours** and **Hotels**, with fields for Location, Check-in/Check-out dates, and Guest count

###  Trusted By
- Airline partner logos (EgyptAir, Delta, WestJet, Air France, etc.) displayed in a branded banner section

###  Popular Destinations
- Destination cards for Venice, Amsterdam, Budapest, Lisbon, London, Ottawa, and Paris — each showing a cover image and tour count
- Promotional CTA card ("Crafting Your Perfect Travel Experience")
- Responsive grid layout (1 → 2 → 4 columns)

###  Featured Tours (Carousel)
- Horizontally scrollable card carousel powered by **Embla Carousel**
- Cards show tour badge (Top Rated, Best Sale, % Off, New), image, title, location, duration, guest count, and price
- Prev/Next navigation buttons

###  Image Carousel
- Auto-scrolling/manual image carousel between sections

###  Top Rated Hotels
- Background-image section with tinted overlay
- Embla Carousel of hotel cards with ratings and pricing
- Responsive prev/next controls (hidden on mobile)

###  AI Deal Finder CTA
- Full-width promotional banner with headline and description
- App Store and Google Play download buttons

###  Payment Methods
- Logo strip displaying PayPal, Stripe, Payoneer, Visa, Cash App, Bitcoin, and Discover

###  Footer
- Brand logo, tagline, and support phone number
- Navigation columns: Company and Services
- Newsletter email subscription input
- Payment method logos (PayPal, Stripe, Visa, Skrill)
- Social media links: Facebook, X (Twitter), YouTube, Instagram
- Copyright notice

---

##  Tech Stack

| Technology | Version |
|---|---|
| Next.js | 16.2.4 |
| React | 19.2.4 |
| Tailwind CSS | v4 |
| Embla Carousel | 8.6.0 |
| Lucide React | 1.9.0 |

---

##  Setup Instructions

### Prerequisites

- **Node.js** v18.18+ (required for Next.js 16)
- **npm**, **yarn**, **pnpm**, or **bun**

### 1. Clone the Repository

```bash
git clone https://github.com/Mehedi-Hasan-18/tripbookingai.git
cd tripbookingai
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### 4. Build for Production

```bash
npm run build
npm run start
```

### 5. Lint

```bash
npm run lint
```

---

##  Project Structure

```
tripbookingai/
├── public/                  # Static assets (images, logos, icons)
├── src/
│   ├── app/
│   │   ├── layout.js        # Root layout with fonts
│   │   ├── page.js          # Entry page (renders Main + Footer)
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Main.jsx          # Root component — composes all sections
│       ├── Navber.jsx        # Responsive navigation header
│       ├── SearchForm.jsx    # Tabbed tour/hotel search widget
│       ├── TrustedBy.jsx     # Airline partners logo strip
│       ├── PopularDestinations.jsx  # Destination cards grid
│       ├── FeaturedTours.jsx # Embla carousel of tour cards
│       ├── TourCard.jsx      # Individual tour card component
│       ├── ImageCarousol.jsx # Standalone image carousel
│       ├── TopRated.jsx      # Top-rated hotels carousel section
│       ├── TopRatedCard.jsx  # Individual hotel card component
│       ├── PaymentMethod.jsx # Payment gateway logo strip
│       ├── Footer.jsx        # Site footer
│       ├── SearchBtn.jsx     # Search icon button
│       └── SignInBtn.jsx     # Sign In button
├── next.config.mjs
├── postcss.config.mjs
├── jsconfig.json
└── package.json
```

---

##  Assumptions

- **UI only — no backend or API integration.** All tour, hotel, and destination data is hardcoded as static arrays directly in the components. There is no database, CMS, or external travel API connected.
- **Search form is non-functional.** The location, date, and guest fields are display-only UI elements. Submitting the form does not trigger any search or navigation.
- **Navigation links are placeholders.** Routes like `/tours`, `/hotels`, `/blog`, `/about`, and `/contact` do not have corresponding pages — only the home route (`/`) is implemented.
- **App Store / Play Store buttons are decorative.** They render correctly but do not link to real app listings.
- **Newsletter subscription is non-functional.** The email input and subscribe button in the footer are UI-only with no form submission logic.
- **No authentication.** The "Sign In" button in the navbar is a UI element only — there is no auth flow implemented.
- **Images are local assets.** All images are stored in `/public` and served statically. No remote image domains are configured in `next.config.mjs`.

##  License

All rights reserved to Mehedi Hasan
