# Format Console Log

Librería que muestra diferentes mensajes en colores personalizados para hacer referencia a mensajes "success", "info", "error" e incluso de "warning".

### Instalación

```
npm i fmtconsolelg
```

### Uso

Para usar el módulo tenemos que importarlo.

```
var m = require('fmtconsolelg');
```

### Mensaje de confirmación "ok"

```
m.success('Los datos se han enviado correctamente');
```

### Mensaje de información "info"

```
m.info('Los datos se han enviado correctamente');
```

### Mensaje de advertencia "aviso"

```
m.warm('Los datos se han enviado correctamente aunque no muy rápido');
```

### Mensaje de fallo "error"

```
m.error('Los datos NO se han enviado correctamente');
```
