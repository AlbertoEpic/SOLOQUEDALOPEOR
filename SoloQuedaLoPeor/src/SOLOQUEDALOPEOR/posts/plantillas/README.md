# Plantillas de Obsidian

Estas plantillas estan preparadas para este proyecto.

## Archivos incluidos

- plantilla-post.md: post general con frontmatter valido para el blog.
- plantilla-post-ruta-gpx.md: post de ruta con campos para mapa GPX y metadatos SEO basicos.
- plantilla-post-btt.md: variante para rutas BTT.
- plantilla-post-esqui-travesia.md: variante para rutas de esqui de travesia.
- plantilla-post-templater.md: plantilla dinamica para usar con el plugin Templater.

## Donde guardar las imagenes

- Guardar las imagenes del post dentro de content/blog/assets/AAAA.
- Referenciarlas desde el markdown con rutas relativas tipo ./assets/2026/foto.webp.
- Reservar /images/... para recursos publicos compartidos o cuando haga falta una URL estable fuera del arbol del post.

## Configuracion recomendada en Obsidian

1. Abrir Ajustes > Archivos y enlaces.
2. En Ubicacion por defecto para nuevos adjuntos, elegir En la carpeta especificada mas abajo.
3. En Carpeta para nuevos adjuntos, poner content/blog/assets.
4. Activar el plugin de plantillas de Obsidian si quieres insertar estos ficheros como base para nuevos posts.
5. Usar como carpeta de plantillas docs/obsidian.
6. Si abres este repo como vault, ya queda una configuracion minima en .obsidian para nuevos archivos y plantillas.

## Como usar las plantillas

1. Crear un nuevo archivo dentro de content/blog.
2. Copiar el contenido de la plantilla adecuada.
3. Cambiar titulo, fechas, extracto, categoria y tags.
4. Pegar o mover las fotos desde content/blog/assets a content/blog/assets/AAAA.
5. Ajustar la ruta de image y de las imagenes del cuerpo.
6. Para rutas, dejar gpxMap: true y asegurarse de que el GPX este disponible para que el componente lo encuentre.

## Configuracion incluida en el repo

- .obsidian/app.json: nuevos archivos dentro de content/blog y adjuntos en content/blog/assets.
- .obsidian/core-plugins.json: activa el plugin nativo Templates.
- .obsidian/templates.json: define docs/obsidian como carpeta de plantillas.
- .obsidian/community-plugins.json: deja activado Templater si esta disponible en el vault.
- .obsidian/plugins/templater-obsidian/data.json: aplica la plantilla dinamica al crear archivos en content/blog.

## Templater

- plantilla-post-templater.md usa variables dinamicas para fecha, slug y carpeta de imagenes por ano.
- Requiere el plugin comunitario Templater.
- La configuracion del plugin queda preparada en el repo, pero Obsidian debe tener instalado el plugin para usarla.

## Notas sobre GPX

- El schema del blog admite gpxMap: true.
- El componente del mapa busca tracks GPX para mostrarlos junto al post.
- Si el post es de ruta pero no hay track asociado, el post sigue siendo valido; simplemente no aparecera el mapa.