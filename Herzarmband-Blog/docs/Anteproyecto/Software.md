---
bar-position: 1
---

## React Native App | Arduino Code

- La App será creada en React Native y consistirá de una barra de navegación superior con dos secciones distintas: una que mostrará el pulso cardíaco por pantalla de X individuo junto a su foto asignada y, la otra dará una lista de personas a elegir para mostrar en la sección antes nombrada.

Para una mayor noción de la App, disponemos del siguiente boceto:

![](../../static/img/App%20Idea.png)

Como se vé: esas serán las dos secciones de la App, siendo la izquierda la primera y principal; la App siempre iniciará con esa pantalla y, la segunda, la pantalla que estará destinada a tener una lista de usuarios a elegir, que rellenarán los datos de la pantalla principal y siendo solo estos datos una foto y un nombre que preferiblemente se tratarán de guardar en un archivo json que se guardará en el telefono.

Luego, el signo de " + " abrirá una venCtana emergente que esperará un nombre y el adjunte de una imagen.

### Sección Principal:

![](../../static/img/App%20One.png)

### Sección Secundaria | Lista

![](../../static/img/App%20Two%20.png)

---

### Script:

- Con Script hago referencia al código general del funcionamiento del brazalete, y éste consistirá, principalmente, de un código que se encargue de crear un menu de estilo carrousel que se encargue de mostrar datos en pantalla, ya sea el pulso, la hora, el nivel de bateria, etc.

Su diseño se piensa así para ser intuitivo y ser fácilmente utilizable con un único botón que se encargará de simplemente desplazar pantallas.

¿A qué me refiero con "carrousel"? Básicamente a una UI que funcione de la siguiente manera:

![](https://t9013211267.p.clickup-attachments.com/t9013211267/c40dbaa1-ef9a-403b-a104-bff346d8625a/carousel-ads.gif.original.gif)

Lo ídoneo a lo que pensamos llegar es a crear una UI que en el HUB superior contenga el nivel de bateria y la hora; mientras que, en la inferior exista este "carrousel" que irá cambiando entre ventanas que serán ídoneamente una función de código que pueda reutilizarse y esté bien documentada para que, sí quisiemos nosotros o alguien más implementar éste código, ya sea para crear Anexos del proyecto o, simplemente utilizar este código: sea sencillo de reutilizar.

---
