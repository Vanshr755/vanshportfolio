# Vansh Rana - React Portfolio

Vite + React portfolio (Poppins font, teal + gold theme, dark mode, scroll animations).

## Run karne ka tarika
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview    # build ko locally dekho
```

## Folder structure
```
src/
  data/portfolio.js      <- sab content (text, skills, projects, education, links)
  components/            <- Navbar, Hero, About, Skills, SkillCard, Projects, ProjectCard,
                            Education, Contact, Footer, Section, Reveal, ScrollTopButton
  hooks/                 <- useTheme, useInView, useActiveSection
  styles/global.css      <- colors (CSS variables) + saari styling
public/
  images/profile.jpg     <- apni original photo se replace karo
  images/project-ecommerce.jpg
  resume.pdf             <- apna resume yahan rakho (Resume button isse download karta hai)
```

## Customize kaise karein
- **Content / links / email:** `src/data/portfolio.js`
- **Photo:** `public/images/profile.jpg` replace karo (square photo best rehti hai)
- **Project image:** `public/images/` me daalo aur `portfolio.js` me `image: asset("images/xyz.jpg")`
- **Project ke Code / Live Demo buttons:** `github` aur `live` fields me URL daalo (khali ho to button hide)
- **Colors:** `global.css` ke top ke CSS variables (`--primary`, `--gold`, ...)
- **Naya section:** `components/` me file banao, `Section` wrapper use karo, `App.jsx` aur `navLinks` me add karo

## Deploy
`npm run build` ke baad `dist/` folder Netlify / Vercel pe upload karo.

## Contact form + Rating
Visitor "Send Message" ya "Submit rating" dabata hai to seedha tumhare Gmail inbox me email aati hai.
- **Zyada reliable (recommended):** web3forms.com par email daal ke free Access Key lo, `.env.example` ko `.env` naam se copy karke
  `VITE_WEB3FORMS_KEY=...` likho, aur `npm run dev` dobara chalao.
- **Bina key:** FormSubmit use hota hai. Pehle message par Gmail me "Activate Form" email aati hai (Spam bhi dekho) - ek baar activate karo.
- Form fail ho to visitor ko "send it from your email app" ka link dikhta hai.
- Rating sirf tumhe email me aati hai. Visitor ke browser me yaad rehta hai ki usne kya rating di (public average nahi dikhta,
  uske liye backend/database chahiye).
- Logic `src/services/sendMessage.js`, UI `Contact.jsx` aur `Rating.jsx` me hai.

## Design change
- **Color theme:** `portfolio.js` me `accent: "teal" | "indigo" | "green" | "rose"`.
- **Apna custom color:** `global.css` ke top me `--primary`, `--primary-soft`, `--gold`.
- **Font:** `index.html` ka Google Fonts link aur `global.css` ke `body { font-family }`.
- **Sections ka order:** `App.jsx` me components ka order badlo (navbar order `navLinks` me).
- **Section hatana:** `App.jsx` se component aur `navLinks` se entry hata do.
