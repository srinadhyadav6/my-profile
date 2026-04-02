## Deployment

### Deploying to Netlify

1. **Connect to GitHub**: Log in to [Netlify](https://app.netlify.com/), click "Add new site", and select "Import from an existing project". Choose GitHub and select the `my-profile` repository.
2. **Build Settings**: 
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - (Note: `netlify.toml` is included in the repo and will automatically configure these for you).
3. **Environment Variables**:
   Go to **Site settings > Build & deploy > Environment** and add the following:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
   - `VITE_GOOGLE_CLIENT_ID`
   - `VITE_GEMINI_API_KEY`
4. **Deploy**: Click "Deploy site".

### Post-Deployment (Google Login)
If you are using Google OAuth, remember to add your new Netlify site URL (e.g., `https://your-site-name.netlify.app`) to the "Authorized redirect URIs" in your [Google Cloud Console](https://console.cloud.google.com/apis/credentials).
