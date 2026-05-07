---
title: "SOLUCIONADO: \"Error desconocido al abrir archivo de importación\""
image: "https://i.imgur.com/ZqwMHzv.gif"
publishDate: 2019-05-08T10:41:15Z
updateDate: 2019-05-12T12:26:12Z
draft: false
author: "AlbertoEpic"
excerpt: "El otro día, trasteando con temas de GPS, me surgió este problema: había descargado un track en formato .gpx del Strava, y me disponía a estudiarlo y cargarlo en mi reloj GPS para seguir esa ruta. Pero al intentar abrirlo con el Garmin Base"
category: "Tutoriales"
tags:
  - "gps"
---

El otro día, trasteando con temas de GPS, me surgió este problema: había descargado un track en formato .gpx del Strava, y me disponía a estudiarlo y cargarlo en mi reloj GPS para seguir esa ruta. Pero al intentar abrirlo con el Garmin BaseCamp, la importación se detenía y me daba el siguiente error: "Error desconocido al abrir archivo de importación".

![Imagen](https://i.imgur.com/ZqwMHzv.gif)

Ningún problema: como casi siempre, la solución estaba en internet. Después de buscar un poco, solucioné el problema sin mayores dificultades. A continuación detallo la solución por si le sirve a alguien:

Por lo que sea, el BaseCamp tiene problemas con los metadatos de algunos archivos .gpx y la solución es eliminarlos antes de la importación. Para ello realizamos lo siguiente:

Abrimos el archivo .gpx con un editor de código, como por ejemplo el Notepad++, o simplemente con el Block de Notas. Accedemos así al código del track que vemos a continuación. No lo veremos tan bonito, lo he formateado un poco para clarificar:

[code lang="xml" highlight="5-6"]
<?xml version="1.0" encoding="utf-8"?>
<gpx version="1.1" creator="Strava GPX downloader (https://chrome.google.com/webstore/detail/strava-gpx-downloader/pnglhfabfkchkadgnkfacoakincdpeeg)" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" xmlns:gpxtpx="http://www.garmin.com/xmlschemas/TrackPointExtension/v1">

<metadata>
<time>1970-01-01T00:00:00.000Z</time>
<link href="https://www.strava.com/activities/2322571291/"><text>Strava</text></link>
</metadata>

<trk><name>Ciclismo por la mañana</name><type>Recorrido en bicicleta</type>
<trkseg>
<trkpt lat="42.419591" lon="-0.803617"><ele>633.7</ele><time>1970-01-01T00:00:00.000Z</time></trkpt>
<trkpt lat="42.419529" lon="-0.803685"><ele>633.8</ele><time>1970-01-01T00:00:26.000Z</time></trkpt>
<trkpt lat="42.419535" lon="-0.803609"><ele>633.9</ele><time>1970-01-01T00:10:23.000Z</time></trkpt>
<trkpt lat="42.419575" lon="-0.803614"><ele>634</ele><time>1970-01-01T00:11:10.000Z</time></trkpt>
<trkpt lat="42.419523" lon="-0.803649"><ele>634.1</ele><time>1970-01-01T00:12:05.000Z</time></trkpt>
<trkpt lat="42.419533" lon="-0.803693"><ele>634.2</ele><time>1970-01-01T00:12:43.000Z</time></trkpt>
<trkpt lat="42.419542" lon="-0.803731"><ele>634.2</ele><time>1970-01-01T00:12:54.000Z</time></trkpt>

(...)

[/code]

Debemos buscar en el código el bloque de los metadatos (resaltado en la imagen superior). Para solucionar nuestro problema, simplemente debemos borrar todo el bloque, para que nos quede tal y como se muestra a continuación:

[code lang="xml"]
<?xml version="1.0" encoding="utf-8"?>
<gpx version="1.1" creator="Strava GPX downloader (https://chrome.google.com/webstore/detail/strava-gpx-downloader/pnglhfabfkchkadgnkfacoakincdpeeg)" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd" xmlns:gpxtpx="http://www.garmin.com/xmlschemas/TrackPointExtension/v1">

<metadata>
</metadata>

<trk><name>Ciclismo por la mañana</name><type>Recorrido en bicicleta</type>
<trkseg>
<trkpt lat="42.419591" lon="-0.803617"><ele>633.7</ele><time>1970-01-01T00:00:00.000Z</time></trkpt>
<trkpt lat="42.419529" lon="-0.803685"><ele>633.8</ele><time>1970-01-01T00:00:26.000Z</time></trkpt>
<trkpt lat="42.419535" lon="-0.803609"><ele>633.9</ele><time>1970-01-01T00:10:23.000Z</time></trkpt>
<trkpt lat="42.419575" lon="-0.803614"><ele>634</ele><time>1970-01-01T00:11:10.000Z</time></trkpt>
<trkpt lat="42.419523" lon="-0.803649"><ele>634.1</ele><time>1970-01-01T00:12:05.000Z</time></trkpt>
<trkpt lat="42.419533" lon="-0.803693"><ele>634.2</ele><time>1970-01-01T00:12:43.000Z</time></trkpt>
<trkpt lat="42.419542" lon="-0.803731"><ele>634.2</ele><time>1970-01-01T00:12:54.000Z</time></trkpt>

(...)

[/code]

Ahora ya simplemente tenemos que guardar el archivo .gpx para poder abrirlo sin problemas con el Garmin BaseCamp. Pasarlo al GPS, apagar el ordenador... y al monte!

<figure class="wp-block-pullquote" style="border-color:#ff0000"><blockquote class="has-text-color has-accent-color">ACTUALIZADO!!!<cite>12 MAYO 2019</cite></blockquote></figure>

Desgraciadamente, la solución anterior no sirve para todos los casos. Hay gente que nos ha comentado que después de seguir los pasos y eliminar la información de los metadatos, el BaseCamp les sigue dando el mismo error. Así que desde SQLP proponemos otra solución con la que en principio debería solucionarse el problema.

Si todavía no lo conoces, debes descargarte e instalar el GPSbabel. Es un programa gratuito para convertir entre la multitud de formatos existentes en el mundo de la geolocalización. Lo tienes <strong><a rel="noreferrer noopener" aria-label="disponible en su página web (abre en una nueva pestaña)" href="https://www.gpsbabel.org/index.html" target="_blank">disponible en su página web</a></strong>.

![Imagen](https://i.imgur.com/v14Zlm2.gif)

Una vez instalado, abres el programa y en la sección de 'Entrada' seleccionas formato 'GPX XML' (En este caso, pero puede ser cualquier otro, que corresponda al track que nos da problemas) e indicas el nombre del fichero problemático. En la sección de 'Salida' seleccionas también el formato 'GPX XML' y el nombre y la dirección del track que, ahora seguro que sí,  vas a poder abrir con el BaseCamp.

Le das a 'Aceptar' y en un instante tendrás creado el track. Ahora ya no habrá track que se te resista!!!
