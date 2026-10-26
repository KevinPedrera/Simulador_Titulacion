# Activar transferencia de sesiones con Firebase

Proyecto Firebase: `appmoviliii`.

## 1. Habilitar inicio de sesión Google

Firebase Console > Authentication > Sign-in method > Google > Habilitar.

En Authentication > Settings > Authorized domains, verificar que `kevinpedrera.github.io` esté autorizado. Si no aparece, agregarlo.

## 2. Crear Firestore

Firebase Console > Firestore Database > Crear base de datos. Elegir plan gratuito y **modo de producción** (no modo de prueba).

## 3. Reglas de seguridad

En Firestore Database > Reglas, publicar lo siguiente (si hay reglas previas, revisar y fusionar sin borrar las reglas necesarias de otras aplicaciones):

```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/transfers/{pin} {
      allow get, create, update, delete: if request.auth != null
        && request.auth.uid == userId
        && pin.matches('^[0-9]{4}$');
      allow list: if false;
    }
  }
}
```

Estas reglas aíslan las sesiones por cuenta autenticada. Son adecuadas para un simulador personal, pero no deben sustituir un diseño de seguridad completo en un sistema público. Para un producto comercial se necesitarían validaciones de campos, límites de tamaño y controles de abuso adicionales.

## 4. Probar

En la computadora: iniciar simulacro > Transferir a otro dispositivo > Guardar sesión y generar PIN. Autorizar acceso Google. En el celular: abrir el sitio > Importar sesión de otro dispositivo > iniciar con la **misma cuenta** > introducir PIN.

El PIN dura 24 horas. El temporizador sigue corriendo. Las sesiones permanecen en Firestore hasta su eliminación manual o configuración de TTL; la expiración en la interfaz no borra automáticamente documentos no consultados. Puedes habilitar una política TTL sobre `expiresAt` solo si cambias el tipo a Timestamp y ajustas el código. Actualmente es un número en milisegundos.

**No publicar reglas de prueba que permitan leer o escribir a cualquier usuario.**

## Limitaciones

La sincronización entre dispositivos es manual al pulsar Guardar sesión y generar PIN; los cambios posteriores requieren generar un PIN nuevo. El guardado automático durante el examen sigue siendo local. La configuración web Firebase es pública, las reglas son las que protegen los datos.
