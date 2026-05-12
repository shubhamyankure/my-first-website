# CircuitNest Static GitHub Pages Site

This version does **not** need React, Vite, npm, build commands, or GitHub Actions.

## Upload to GitHub

Upload these files directly to your repository:

```text
index.html
style.css
script.js
images/
```

## Add images

Extract `images.rar` and place all image files inside the `images` folder:

```text
images/
  Smart Greenhouse Automation.avif
  IoT Home Automation.avif
  Automatic Street Light.avif
  Bluetooth control Robotic Car.avif
  ...
```

If an image is missing, the website automatically uses a fallback online image.

## Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings > Pages**.
3. Under **Source**, choose **Deploy from a branch**.
4. Select:
   - Branch: `main`
   - Folder: `/root`
5. Click **Save**.

Your site will be available at:

```text
https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME/
```

## If you still see a white screen

Open the browser console:
- Windows/Linux: `Ctrl + Shift + J`
- Mac: `Cmd + Option + J`

Then check for red errors. This static version should not show a white screen unless files are missing or not uploaded.
