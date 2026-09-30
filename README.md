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

## Componentes (carpeta components/)
- `ClaudeTiles`: mosaicos con degradado + destello de Claude girando (portada y "Claude para tu perfil").
- `Roadmap`: camino de 6 etapas. `<Roadmap />` completo, `<Roadmap :active="3" mini />` en cada portada de etapa.
- `Poll` (encuesta inicio/cierre), `Quiz` (opciones clicables), `HeadlineBuilder` (titular en vivo), `CopyBtn` (copiar prompt), `LegitGame`, `PlanChecklist`. Los contadores y el checklist se guardan en el navegador.
- `Logo n="aws"`: logos en `public/logos/`. Sin logo verificado muestra un monograma.
- `Annotated`: captura con recuadros pintados (verde = bien, naranja = mejorar).

## Agregar tus capturas de LinkedIn
1. Guarda la imagen en `public/img/` (ej. `acerca-de.png`).
2. En `gen.js`, busca `annotated("Tu perfil · Acerca de"` y cambia `""` por `"/img/acerca-de.png"`.
3. Agrega recuadros en % de la imagen: `{ "x": 5, "y": 10, "w": 40, "h": 8, "n": 1, "tone": "fix" }` (tone: `good` o `fix`).
4. Si la imagen no es 1534×890, pasa su proporción con `ratio` en el componente.

## Estilos
Todo el CSS de `style.css` va acotado a `.slidev-layout` (regla de la skill de Slidev) para no romper el modo presentador.
