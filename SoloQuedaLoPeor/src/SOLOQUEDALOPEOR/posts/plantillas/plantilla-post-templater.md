---
title: "<% tp.file.title.replace(/-/g, ' ') %>"
image: "/images/obsidian-placeholder.svg"
publishDate: <% tp.date.now('YYYY-MM-DD[T]HH:mm:ss[Z]') %>
updateDate: <% tp.date.now('YYYY-MM-DD[T]HH:mm:ss[Z]') %>
draft: false
author: "SQLP"
excerpt: "Resumen corto del articulo."
category: "Categoria"
tags:
  - "tag1"
  - "tag2"
gpxMap: false
metadata:
  title: "<% tp.file.title.replace(/-/g, ' ') %>"
  description: "Resumen corto del articulo."
---

Cuando tengas la portada real, sustituye image en el frontmatter por una ruta como:

```md
image: "./assets/<% tp.date.now('YYYY') %>/<% tp.file.title %>.webp"
```

Y en el cuerpo usa:

```md
![Imagen destacada](./assets/<% tp.date.now('YYYY') %>/<% tp.file.title %>.webp)
```

Introduccion del post.

## Contenido

Texto del articulo.

## Notas

- Carpeta sugerida para adjuntos: content/blog/assets/<% tp.date.now('YYYY') %>
- Si es una ruta con mapa, cambia gpxMap a true.
