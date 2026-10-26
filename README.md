# Mystery Crate Mayhem

A goofy first-person battle royale with mystery crates, tank battles, boss mode and online play.

## Play it on GitHub Pages

1. Sign in at https://github.com and click **New repository**. Name it e.g. `mystery-crate-mayhem` and make it **Public**.
2. On the new repo page click **uploading an existing file**.
3. Unzip this download, open the folder, select **everything inside it** (index.html, sw.js, manifest.webmanifest, privacy.html, README.md, .nojekyll and the folders fonts, icons, lib) and drag it all into the upload box. Click **Commit changes**.
   - `index.html` must be at the top level of the repo, not inside a sub-folder.
   - `.nojekyll` is a hidden file; if your computer hides it, that's OK, the game still works without it.
4. Go to **Settings → Pages**. Under *Build and deployment* pick **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. Wait about a minute, refresh the Pages settings page, and click the link it shows:
   `https://YOUR-USERNAME.github.io/mystery-crate-mayhem/`

## Notes
- Everything (three.js, PeerJS, fonts, icons) is included, so no other downloads are needed.
- After the first visit the game is cached and can start offline. It can also be installed as an app from the browser menu.
- Online play uses room codes over PeerJS; both players just open the same link.
- To update the game later, upload the new files over the old ones; the cache refreshes automatically when the version changes.
