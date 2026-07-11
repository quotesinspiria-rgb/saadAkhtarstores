# saadakhtarstore — free Cash-on-Delivery store

A real store: product catalog, cart, and checkout — hosted free, forever,
with no monthly bill and no payment gateway needed. Customers fill in their
name, phone, and address, then their order is sent straight to your
WhatsApp as a message. You confirm and arrange delivery/COD payment
yourself, same as any COD business.

## How it works

- `index.html` / `css/style.css` / `js/` — the storefront, cart, and order
  form. Pure static files, no build step, no backend.
- `js/products.js` — your product list. Edit this to add real items and
  real prices (in Rs).
- `js/app.js` — has one line near the bottom you need to check:
  `const STORE_WHATSAPP_NUMBER = "923064322613";` — this is already set to
  your number. Update it here if it ever changes.

## Setup — hosting it for free on GitHub Pages

You already have the files in a GitHub repo. Now just turn on Pages:

1. Go to your repo on github.com (e.g. `github.com/quotesinspiria-rgb/saadAkhtarstore`)
2. Click **Settings** (top menu of the repo)
3. In the left sidebar, click **Pages**
4. Under **Build and deployment → Source**, choose **Deploy from a branch**
5. Under **Branch**, choose **main** (or **master**, whichever your repo uses)
   and folder **/ (root)** → click **Save**
6. Wait 1–2 minutes, then refresh the page — GitHub will show a green box
   with your live URL, something like:
   `https://quotesinspiria-rgb.github.io/saadAkhtarstore/`
7. Open that link — your store is now live for anyone in the world.

## How an order actually arrives

1. Customer browses your site, adds items to cart
2. They fill in name, phone, address, and tap **Place order on WhatsApp**
3. WhatsApp opens (on their phone or WhatsApp Web) with a pre-filled
   message listing what they ordered and their details, addressed to your
   number
4. They hit send — you receive it in WhatsApp like any chat message
5. You confirm the order with them and arrange delivery; they pay cash
   when it arrives

No app to check, no dashboard — it's just a WhatsApp chat.

## Updating your products later

Whenever you want to add, remove, or change a price:
1. On github.com, open `js/products.js` in your repo
2. Click the pencil (✏️) icon to edit it directly in the browser
3. Make your changes, following the same pattern as the existing items
4. Scroll down, click **Commit changes**
5. Your live site updates automatically within a minute or two — no
   redeploy needed.

## Things worth adding next
- Real product photos (replace the placeholder color swatches in
  `css/style.css` — look for `.card-swatch` and `.cart-line-swatch`, and
  swap `background` for `background-image: url(...)`).
- Your real store name/branding in place of "The General Catalog" in
  `index.html`.
- A note near the order form about your delivery areas/charges, since COD
  usually only covers certain cities.
