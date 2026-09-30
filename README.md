# La IA no te quitará el trabajo, pero sí te lo puede conseguir

Presentación en [Slidev](https://sli.dev) (~90 diapositivas, 50–60 min).

- `gen.js` genera `slides.md` a partir del contenido. Edita ahí o directamente en `slides.md`.
- `npm run gen` regenera · `npm run dev` presenta (modo presentador: tecla `p`, con notas) · `npm run export` exporta a PDF.
- Las ilustraciones viven en `public/img/` y se referencian desde `images.json`. La foto del speaker es `public/foto.jpg`. El QR abre el LinkedIn.
- Ojo: `npm run gen` sobreescribe `slides.md`.

## Animaciones
- Cada diapositiva usa el layout `anim` / `animgrad` (`layouts/`), que agrega la clase `.on` al entrar; las animaciones CSS están al final de `style.css`.
- `components/Num.vue`: números que cuentan de 0 al valor (`<Num v="+62%" />`).
- Listas, tarjetas y pasos aparecen por clic (`v-click`). Se desactivan con `prefers-reduced-motion`.
