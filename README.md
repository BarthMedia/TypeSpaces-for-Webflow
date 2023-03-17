# Webflow Large-Scale Software Development Kit

A minimalist template repository for building rich native JavaScript/jQuery applications for Webflow.

---

## 🎥 YouTube Preview Video

[![YouTube Preview Video](https://img.youtube.com/vi/RI51iH61ccY/0.jpg)](https://www.youtube.com/watch?v=RI51iH61ccY)

---

## 🚀 Getting Started

### Using GitHub Codespaces

1. Click **Use this template**.
2. Select **Open in a codespace**.
3. Wait 30 seconds to two minutes for everything to install automatically.
4. Type `npm start` in the terminal.
5. Press `http://localhost:1234`.
6. Follow the instructions on the bmg.studio documentation page to integrate with your Webflow project.

### Using Desktop

1. Download the [file (/zip)](https://github.com/BarthMedia/codespaces-for-webflow/archive/refs/heads/main.zip) and open it in Visual Studio Code.
2. Open the terminal and type `npm i`, then `npm start`.
3. Press `http://localhost:1234`.
4. Follow the instructions on the bmg.studio documentation page to integrate with your Webflow project.

*Make sure you have npm installed: [https://nodejs.org/en/download](https://nodejs.org/en/download)*

---

## 🏗️ Building Production Code

1. After you're done, type `npm run build` in the terminal.
2. Follow the instructions to locate and use the generated production files.

---

## 🌐 Hosting Production Files on GitHub

### Manual Method

1. Copy the compressed controller JavaScript code from the `dist` folder.
2. [Create a new file](https://github.com/BarthMedia/codespaces-for-webflow/generate) in your GitHub repository and paste the copied code.
3. Commit the new file.
4. Get the jsDelivr link by pasting the file's URL on [jsDelivr's GitHub page](https://www.jsdelivr.com/github).
5. Replace the `src` URL in your Webflow project settings with the jsDelivr link.
6. Publish your Webflow project.

### Using Git

*Make sure you have Git installed: [https://git-scm.com/downloads](https://git-scm.com/downloads)*

1. Initialize the Git repository using `git init`.
2. Rename the default branch to `main` using `git branch -m master main`.
3. Configure your Git username and email using `git config --global user.name YOUR NAME` and `git config --global user.email YOUR_EMAIL`.
4. Add and commit your changes using `git add -A` and `git commit -m 'first commit 🚀'`.
5. Add your GitHub repository as the remote origin using `git remote add origin https://github.com/USER/REPO.git`.
6. Set the remote URL using `git remote set-url origin https://github.com/USER/REPO.git`.
7. Push your changes to GitHub using `git push origin main`.
