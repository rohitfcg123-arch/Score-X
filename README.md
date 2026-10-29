# Score-X Cricket Website

This is a **website-only** cricket score project, not an Android app.

- `index.html` — homepage
- `viewer.html` — public live scoreboard
- `admin.html` — admin console
- `scorer.html` — scorer desk
- `firebase.js` — Firebase web SDK configuration
- `firestore.rules` — starter database security rules

## 1. Finish Firebase web config
Open `firebase.js` and replace:
- `PASTE_FIREBASE_WEB_API_KEY`
- `PASTE_FIREBASE_WEB_APP_ID`

with the corresponding values from Firebase Console → Project settings → General → Your apps → Web app config. The other project values are already filled in. The Firebase web API key is a client identifier, not an admin/service-account key. Never put service-account JSON or private keys in this repository.

## 2. Enable Firebase services
1. In project `score-x-6d060`, open Authentication → Sign-in method and enable **Email/Password**.
2. Create the Cloud Firestore database.
3. Add the eventual hosting domain in Authentication → Settings → Authorized domains.

## 3. Bootstrap the first admin
The initial admin record must be created before the restrictive rules can recognize an admin.
1. Create your own admin account in Authentication → Users → Add user.
2. Copy its UID.
3. Temporarily use Firestore's Rules tab to allow only your initial setup, then create document `users/{YOUR_UID}` with fields `role` = string `admin`, `approved` = boolean `true`, and `displayName` = string `Admin`.
4. Immediately publish the rules from this repository's `firestore.rules` into Firestore → Rules.
5. Test admin sign-in before adding scorer accounts.

Do not leave Firestore in test mode or with open write rules.

## 4. Publish website
In GitHub → repository Settings → Pages, select **Deploy from a branch**, branch `main`, folder `/(root)`, and save. Once deployment finishes, the pages should be available at:
- `https://rohitfcg123-arch.github.io/Score-X/`
- `https://rohitfcg123-arch.github.io/Score-X/viewer.html`
- `https://rohitfcg123-arch.github.io/Score-X/admin.html`
- `https://rohitfcg123-arch.github.io/Score-X/scorer.html`

These are three separate functional pages under one GitHub Pages site. If separate hostnames are required, deploy each page as a separate Firebase Hosting site later.

## Known limitations of this first version
- Scorer accounts are created in Firebase Authentication by an admin; the admin page then approves their UID in Firestore.
- The concurrent-session limit is saved as a setting but is **not yet enforced** by a trusted backend.
- Activity shows the latest updater on each match; a fully append-only audit trail and server-enforced session revocation still need implementation.
- Scoring is an initial MVP, not a full professional scoring engine. Validate innings, targets, fall of wickets, run-outs, and corrections before relying on it for official matches.
- Firestore rules must be published and tested; page hiding is not security.
