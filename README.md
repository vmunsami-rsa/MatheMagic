# ScaleWise Converter

ScaleWise is a static, mobile-friendly conversion app for iPhone, iPad, and desktop browsers. It supports both direct conversion and generated conversion tables, and includes a service worker for offline use after the first visit.

## Included Conversions

- Length
- Weight / Mass
- Temperature
- Volume
- Area
- Speed
- Pressure

## Deploy With GitHub Pages

1. Create a new GitHub repository.
2. Upload everything in this folder to the repository root.
3. In GitHub, open **Settings > Pages**.
4. Set **Source** to **Deploy from a branch**.
5. Choose the `main` branch and `/root`, then save.

GitHub will publish the app at:

```text
https://YOUR-GITHUB-USERNAME.github.io/YOUR-REPOSITORY-NAME/
```

## Local Preview

Open `index.html` directly in a browser, or run a tiny local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
