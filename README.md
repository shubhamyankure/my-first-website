# CircuitNest Projects Store

Ready-to-upload React + Vite website for GitHub Pages.

## Add your images

Extract `images.rar` and copy all image files into:

```text
public/images/
```

The folder should look like:

```text
public/
  images/
    Smart Greenhouse Automation.avif
    IoT Home Automation.avif
    Automatic Street Light.avif
    Bluetooth control Robotic Car.avif
    ...
```

The website has fallback online images, so it will still run if some images are missing.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages

This project includes `.github/workflows/deploy.yml`.

On GitHub:

1. Upload/push all files to your repository.
2. Go to **Settings > Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Push to the `main` branch.
5. Open the URL shown after the workflow finishes.

## WhatsApp number

The WhatsApp order number is set in `src/App.jsx`:

```js
const whatsappPhone = "918956919539";
```

Change it if needed.
