# Format Console Log

Librería que muestra diferentes mensajes en colores personalizados para hacer referencia a mensajes "success", "info", "error" e incluso de "warning".

### Instalación

```
npm i custom-console-log
```

### Uso

Para usar el módulo tenemos que importarlo.

```
var m = require('custom-console-log');
```

### Mensaje de confirmación "ok"

```
m.ok('Los datos se han enviado correctamente');
```

### Mensaje de información "info"

```
m.info('Los datos se han enviado correctamente');
```

### Mensaje de advertencia "aviso"

```
m.aviso('Los datos se han enviado correctamente aunque no muy rápido');
```

### Mensaje de fallo "error"

```
m.error('Los datos NO se han enviado correctamente');
```
