# Score-X Cricket Website

Score-X is a web-only cricket live scoring project. It has three pages:
- `index.html` — home page and links
- `viewer.html` — public real-time score viewer
- `admin.html` — admin login, scorer approval, access limit and activity
- `scorer.html` — match creation and score entry
- `firebase.js` — Firebase web configuration
- `firestore.rules` — starter Firestore security rules

## Firebase setup
1. In Firebase Console for project `score-x-6d060`, enable **Authentication → Sign-in method → Email/Password**.
2. Create a **Cloud Firestore** database.
3. Publish the rules in `firestore.rules` from Firestore → Rules.
4. Create the first admin user in Authentication → Users.
5. In Firestore, manually create `users/{ADMIN_UID}` with fields:
   - `role`: `admin` (string)
   - `approved`: `true` (boolean)
   - `displayName`: `Admin` (string)
6. Add deployed domains under Authentication → Settings → Authorized domains.
7. For GitHub Pages, enable Pages from Settings → Pages → Deploy from branch → `main` / root. The site paths will be:
   - `https://rohitfcg123-arch.github.io/Score-X/`
   - `.../Score-X/viewer.html`
   - `.../Score-X/admin.html`
   - `.../Score-X/scorer.html`

## Important limitations in this starter
- The admin must be bootstrapped manually in Firestore the first time.
- Creating an Authentication user is currently done in Firebase Console; the admin page approves its UID.
- The max-concurrent setting is stored, but is **not yet enforced** by a trusted server/session backend.
- Audit/activity display currently reads the latest match updater fields. Strict append-only audit logs, session revocation, ball-by-ball correction and innings/target logic need additional hardening before public use.
- Keep Firestore rules published; never rely on hiding pages as security.
