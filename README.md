Aplicación de Seguimiento de Hábitos: HabitPro

Esta aplicación te ayuda a mantener un seguimiento de tus hábitos diarios y mejorar tu vida día a día. Con un diseño minimalista y fácil de usar, podrás agregar tus hábitos y marcarlos como completados o no completados.


Instalación

Para instalar la aplicación, sigue los siguientes pasos:

- Clona el repositorio en tu equipo local utilizando git clone https://github.com/...
- Instala las dependencias del proyecto ejecutando npm install en la carpeta raíz del proyecto.
- Inicia la aplicación en modo de desarrollo con npx react-native run-android o npx react-native run-ios.


Funcionalidades

- Agregar hábitos
- Marcar hábitos como completados o no completados
- Ver un registro de tus hábitos completados y no completados
- Iniciar sesión y registrarse para guardar tus hábitos


Tecnologías utilizadas
- React Native
- TypeScript
- Firebase (Autenticación y almacenamiento de datos)


Estructura del proyecto:
- src/
  - components/
    - Button.tsx
    - Header.tsx
    - Input.tsx
  - screens/
    - LoginScreen.tsx
    - RegisterScreen.tsx
    - HomeScreen.tsx
  - utils/
    - api.ts
    - storage.ts
  - App.tsx
- README.md
- package.json
- ...

o bien:


/src
/components
    /Button
        index.tsx
    /Header
        index.tsx
/screens
    /Home
        index.tsx
        styles.ts
    /Settings
        index.tsx
        styles.ts
/services
    /api.ts
index.tsx

Licencia

Esta aplicación está bajo la licencia MIT.
