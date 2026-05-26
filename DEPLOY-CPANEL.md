# Deploy Caprice Tech pe cPanel

Proiectul este configurat pentru **export static** (`output: "export"` în `next.config.ts`), astfel încât poți hosta site-ul pe orice hosting cu cPanel (doar fișiere statice, fără Node.js).

---

## Pasul 1: Build local

Pe calculatorul tău, în rădăcina proiectului:

```bash
npm install
npm run build
```

După build, Next.js creează folderul **`out/`** cu tot site-ul (HTML, CSS, JS, imagini). Acest folder este ce trebuie urcat pe server.

Parola secțiunii Design (`DESIGN_RESOURCES_PASSWORD` din `.env`) este inclusă la build ca **hash SHA-256** în JavaScript (nu în clar), astfel deblocarea funcționează și pe hosting static, fără API Node.

---

## Pasul 2: Conținutul de urcat

Trebuie urcat **conținutul** folderului `out/`, nu folderul `out` în sine:

- Deschide `out/` pe disk.
- Selectează **toate** fișierele și folderele din interior (ex.: `index.html`, `despre-noi/`, `contact/`, `blog/`, `sitemap.xml`, `_next/`, etc.).
- Acestea vor merge în **`public_html`** pe cPanel (sau în subdomeniu/ directorul domeniului tău).

---

## Pasul 3: Upload pe cPanel

**Important:** File Manager din cPanel **nu acceptă upload direct de foldere** (apare eroare „you attempted to upload a folder”). Folosește una din variantele de mai jos.

### Varianta A: File Manager – upload ca arhivă ZIP (recomandat)

1. Pe calculator: click dreapta pe folderul **`out`** → **Comprimare** / **Send to → Compressed (zipped) folder** → se creează `out.zip`.
2. În **cPanel** → **File Manager** → intră în **`public_html`**.
3. Șterge conținutul vechi dacă există (sau mută-l într-un folder de backup).
4. Apasă **Upload** și urcă **doar** fișierul **`out.zip`**.
5. După ce upload-ul s-a terminat, în File Manager click dreapta pe **`out.zip`** → **Extract** / **Extract archive**.
6. La „Extract to” asigură-te că e setat **`public_html`** (sau lasă implicit), apoi confirmă.
7. După extragere, în `public_html` va apărea un folder **`out`**. Intră în el, selectează **toate** fișierele și folderele din interior, apoi **Move** și mută-le în **`public_html`** (rădăcina site-ului). Șterge folderul gol `out` și arhiva `out.zip`.

Rezultat: în `public_html` ai direct `index.html`, `_next/`, `despre-noi/`, `contact/`, `blog/`, etc.

### Varianta B: FTP (FileZilla etc.)

1. Conectează-te la server cu datele FTP (host, user, parolă).
2. Pe server, intră în **`public_html`** (sau directorul domeniului).
3. Pe local, intră în folderul **`out`** al proiectului.
4. Selectează tot conținutul din `out/` și urcă-l în `public_html`.

---

## Pasul 4: Verificare

- Deschide în browser: **`https://caprice-tech.ro`** (sau domeniul tău) – **nu** deschide fișierul `index.html` din File Manager și **nu** dublu-click pe `index.html` pe calculator.
- Verifică: Acasă, Despre noi, Contact, Blog.
- Verifică: `https://caprice-tech.ro/sitemap.xml` și `https://caprice-tech.ro/robots.txt`.

---

## Pagină goală / albă (troubleshooting)

- **Nu deschide `index.html` de pe PC** (dublu-click). Se deschide ca `file:///...` și path-urile `/_next/...` nu funcționează → pagină albă. Site-ul trebuie vizitat **doar prin domeniu**, după ce e urcat pe server.
- **Pe server:** vizitează întotdeauna `https://domeniu.ro/`, nu „Preview” sau linkul către fișier din cPanel.
- Dacă tot vezi pagină goală la domeniu:
  1. În cPanel → File Manager → `public_html`: verifică că există **și** `index.html` **și** folderul **`_next`** (cu tot conținutul), plus imaginile (`logo.jpeg`, `hero.jpeg`, etc.). Fără `_next`, CSS și JavaScript nu se încarcă și pagina rămâne goală.
  2. În browser apasă **F12** → tab **Network** (Rețea) → reîmprospătează pagina. Dacă apar multe erori **404** pentru fișiere din `/_next/` sau pentru imagini, înseamnă că aceste fișiere/foldere lipsesc sau sunt într-un subfolder greșit; conținutul din `out/` trebuie să fie **direct** în `public_html`, nu în `public_html/out/`.

---

## Actualizări ulterioare

După orice modificare în cod:

1. Rulezi din nou local: `npm run build`.
2. Ștergi conținutul vechi din `public_html` (sau doar fișierele afectate).
3. Urcă din nou conținutul actualizat din `out/` în `public_html`.

Poți automatiza upload-ul cu FTP/SFTP (script sau client cu „sync”) după fiecare `npm run build`.

---

## Opțional: .htaccess (Apache pe cPanel)

Dacă vrei HTTPS forțat sau reguli suplimentare, creează în `public_html` un fișier **`.htaccess`** (în `out/` nu există by default). Exemplu minimal:

```apache
# Forțare HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Index implicit
DirectoryIndex index.html
```

Dacă îl creezi local, pune-l în `out/` înainte de upload, ca să fie inclus în conținutul urcat; altfel creează-l direct în `public_html` din cPanel.

---

## Notă despre headere de securitate

Headerele din `next.config.ts` (HSTS, X-Frame-Options etc.) sunt aplicate la build; pe un hosting static (cPanel fără Node) ele trebuie setate de **server** (Apache/Nginx). Poți adăuga unele din ele în `.htaccess` (ex. HSTS, X-Content-Type-Options) dacă providerul permite, sau din setările de securitate ale cPanel/hosting-ului.

---

## Revenire la deploy pe Vercel

Dacă vrei din nou deploy pe Vercel (cu SSR, fără limitări de export static):

1. În `next.config.ts` șterge sau comentează linia: `output: "export",`
2. Fă commit și push; Vercel va rula `next build` normal (fără export static).
